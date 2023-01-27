import cohere from "cohere-ai";
import { useEffect, useState } from "react";
import { COHERE_API } from "../constants";

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
export default function useGenerateIA() {
  const [data, setData] = useState<IDataIA[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const response = async () => {
      setLoading(true);
      try {
        console.log(COHERE_API);
        cohere.init(COHERE_API); // This is your trial API key
        const res = await cohere.generate({
          model: "command-xlarge-nightly",
          prompt:
            "give me recipes for a breakfast to lose weight, with their respective preparation and ingredients",
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
        setLoading(false);
      } catch (err: unknown) {
        setLoading(false);
        if (err instanceof Error) {
          // Inside this block, err is known to be a ValidationError
          setError(err);
        }
      }
    };
    response();
  }, []);

  return { data, loading, error };
}
