import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
        }}
      >
        愛
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
