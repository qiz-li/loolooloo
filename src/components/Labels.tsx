import { Label, useEvent, useMap } from "@mappedin/react-sdk";
import React from 'react';
export default function Labels() {
  const { mapData, mapView } = useMap();

  useEvent("click", (event) => {
    const { labels } = event;

    if (labels.length > 0) {
      labels.forEach((label) => {
        mapView.Labels.remove(label);
      });
    }
  });

  return (
    <>
      {mapData.getByType("space").map((space, idx) => {
        return (
          <Label
            key={idx}
            target={space.center}
            text={space.name}
            options={{
              interactive: true,
              appearance: {
                marker: {
                  foregroundColor: {
                    active: "tomato",
                  },
                },
                text: {
                  foregroundColor: "tomato",
                },
              },
            }}
          />
        );
      })}
      {mapData.getByType("point-of-interest").map((poi, idx) => {
        return (
          <Label
            key={idx}
            target={poi.coordinate}
            text={poi.name}
            options={{
              interactive: true,
              appearance: {
                marker: {
                  foregroundColor: {
                    active: "dodgerblue",
                  },
                },
                text: {
                  foregroundColor: "dodgerblue",
                },
              },
            }}
          />
        );
      })}
    </>
  );
}
