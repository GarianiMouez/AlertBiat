"use client";

import { useEffect, useState } from "react";

interface FactModel {
  y: string;
  x: string;
}

export default function T24Layout() {
  const [facts, setFacts] = useState<FactModel[]>([]);
  const [listening, setListening] = useState<boolean>(false);
  useEffect(() => {
    if (!listening) {
      const events = new EventSource("http://localhost:3000/events");

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);

        setFacts((facts) => facts.concat(parsedData));
      };

      setListening(true);
    }
  }, [listening, facts]);

  return (
    <table className="w-full border-collapse text-center">
      <thead>
        <tr className="hover:bg-slate-400">
          <th>Information</th>
          <th>Source</th>
        </tr>
      </thead>
      <tbody>
        {facts.map((fact, i) => (
          <tr key={i}>
            <td>{fact.x}</td>
            <td>{fact.y}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
