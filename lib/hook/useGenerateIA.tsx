import cohere from "cohere-ai";
import { useEffect, useState } from "react";
import { COHERE_API } from "../constants";
import { useDietStore } from "../store";
import { useBlackListStore, useHistoryStore } from "../store/index";

// const cohere = require("cohere-ai");
export interface IDataIA {
  text: string;
  likelihood?: number;
  token_likelihoods?: [
    {
      token: string;
      likelihood: number;
    }
  ];
}
/* interface useGenerateIAProps {
  text?: string | undefined;
} */
interface useGenerateIAResponse {
  data: IDataIA[];
  loading: boolean;
  error: Error | null;
}
// TO DO:
// Add custom prompt with any text
// Add text formatter
export default function useGenerateIA(): useGenerateIAResponse {
  const [data, setData] = useState<IDataIA[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [diet, type, food, setDiet] = useDietStore((state) => [
    state.diet,
    state.type,
    state.food,
    state.setDiet,
  ]);
  const [addItem] = useHistoryStore((state) => [state.addItem]);
  const { ingredients } = useBlackListStore((state) => state);
  useEffect(() => {
    const response = async () => {
      setLoading(true);
      try {
        cohere.init(COHERE_API); // This is your trial API key
        const res = await cohere.generate({
          model: "command-xlarge-nightly",
          // give me recipes for a breakfast to Low-carb diet that do not include eggs, with their respective preparation and ingredients
          prompt:
            ingredients.length > 0
              ? `give me recipes for a ${food} to ${type} diet that do not include ${new Intl.ListFormat(
                  "en"
                ).format(
                  ingredients
                )}, with their respective preparation and ingredients`
              : `give me recipes for a ${food} to ${type}, with their respective preparation and ingredients`,
          max_tokens: 386,
          temperature: 0.9,
          k: 0,
          p: 0.75,
          frequency_penalty: 0,
          presence_penalty: 0,
          stop_sequences: [],
          return_likelihoods: "NONE",
        });
        setData(res?.body?.generations ? res.body.generations : []);
        if (res?.body?.generations[0]?.text) {
          setDiet(res.body.generations[0].text);
          addItem({
            food,
            type,
            diet: res.body.generations[0].text,
          });
          console.log(diet);
        }
        setLoading(false);
      } catch (err: unknown) {
        setLoading(false);
        if (err instanceof Error) {
          // Inside this block, err is known to be a ValidationError
          setError(err);
        }
      }
    };
    if (type.length > 0 && food.length > 0 && diet.length === 0) {
      response();
    }
  }, [type, food, diet, setDiet, ingredients]);

  return { data, loading, error };
}
