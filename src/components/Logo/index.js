import * as React from "react";
import { Svg } from "./styles";
import { Link } from "@reach/router";

export const Logo = (props) => {
  return (
    <Link to="/">
      <Svg
        width={368.309}
        height={122.021}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="65.846 13.989 368.309 122.021"
        style={{
          background: "0 0",
        }}
        preserveAspectRatio="xMidYMid"
        {...props}
      >
        <defs>
          <filter
            id="prefix__editing-vintage"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feConvolveMatrix
              in="SourceGraphic"
              result="extrude"
              order="9,9"
              divisor={1}
              kernelMatrix="1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1"
            />
            <feFlood floodColor="#83008c" result="flood-extrude" />
            <feComposite
              operator="in"
              in="flood-extrude"
              in2="extrude"
              result="extrude-color"
            />
            <feOffset
              dx={5}
              dy={5}
              in="extrude-color"
              result="extrude-offset"
            />
            <feColorMatrix
              in="SourceGraphic"
              result="stroke"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0"
            />
            <feColorMatrix
              in="SourceGraphic"
              result="fill"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 1 0"
            />
            <feConvolveMatrix
              in="stroke"
              result="inner-shadow"
              order="5,5"
              divisor={1}
              kernelMatrix="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1"
            />
            <feOffset dx={1} dy={1} in="inner-shadow" result="offset" />
            <feComposite
              operator="in"
              in="offset"
              in2="SourceAlpha"
              result="comp"
            />
            <feFlood floodColor="#ab40ff" result="flood3" />
            <feComposite operator="in" in="flood3" in2="comp" result="comp2" />
            <feColorMatrix
              in="comp2"
              result="comp3"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.5 0"
            />
            <feFlood floodColor="#5b058c" result="flood1" />
            <feComposite operator="in" in="flood1" in2="fill" result="fill2" />
            <feFlood floodColor="#fff" result="flood2" />
            <feComposite
              operator="in"
              in="flood2"
              in2="stroke"
              result="stroke2"
            />
            <feMerge result="obj">
              <feMergeNode in="extrude-offset" />
              <feMergeNode in="fill2" />
              <feMergeNode in="comp3" />
            </feMerge>
            <feConvolveMatrix
              in="SourceAlpha"
              result="shadow"
              order="9,9"
              divisor={1}
              kernelMatrix="1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1"
            />
            <feOffset dx={15} dy={15} in="shadow" result="shadow-offset" />
            <feFlood floodColor="#30066d" result="flood-shadow" />
            <feComposite
              operator="in"
              in="flood-shadow"
              in2="shadow-offset"
              result="shadow-color"
            />
            <feMerge>
              <feMergeNode in="shadow-color" />
              <feMergeNode in="obj" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#prefix__editing-vintage)" transform="translate(-9 -9)">
          <path
            d="M137.872 102.512h-13.96l8.13-42.24h14.08l-8.25 42.24zm36.73 1.28h0q-7.74 0-7.74-6.02h0q.06-1.66.57-4.48h0l1.16-5.88h0q1.72-8.32 1.72-10.18h0q0-3.71-2.17-3.71h0q-3.65 0-5.57 9.53h0l-3.78 19.46-12.86 1.28 6.66-33.98 10.49-1.22-1.02 6.27h0q3.01-6.27 12.22-6.27h0q4.48 0 6.37 1.89h0q1.89 1.89 1.89 6.11h0q0 3.97-2.05 13.25h0q-.96 4.16-.96 5.73h0q0 1.56.86 2.46h0q.87.9 2.15 1.02h0q-.64 2.18-2.85 3.46h0q-2.21 1.28-5.09 1.28zm32.19-23.74h0q.9-2.37.9-4.42h0q0-3.78-3.07-3.78h0q-1.6 0-2.91 1.44h0q-1.32 1.44-1.32 3.24h0q0 1.28 1.03 2.3h0q1.47 1.41 5.25 3.71h0q3.77 2.31 5.21 4.19h0q1.44 1.89 1.44 4.48h0q0 2.6-1.25 4.96h0q-1.24 2.37-3.48 4.04h0q-4.8 3.58-12.48 3.58h0q-4.16 0-7.36-2.18h0q-3.2-2.11-3.2-4.6h0q0-2.5 1.82-3.97h0q1.82-1.47 4.51-1.47h0q2.69 0 4.35 1.02h0q-.83 2.11-.83 3.52h0q0 4.22 3.59 4.22h0q1.53 0 2.56-.96h0q1.02-.96 1.02-2.62h0q0-3.26-5.5-6.72h0q-4.48-2.94-5.51-4.1h0q-1.73-2.04-1.73-4.6h0q0-2.56 1.22-5h0q1.22-2.43 3.46-4.16h0q4.67-3.58 12.8-3.58h0q4.16 0 6.62 1.66h0q2.46 1.67 2.46 4.48h0q0 2.82-1.69 4.42h0q-1.7 1.6-4.77 1.6h0q-2.11 0-3.14-.7zm13 16.06h0q0-1.73.89-6.08h0l3.39-17.28h-3.77l.25-1.92h0q7.68-2.3 15.11-7.94h3.07l-1.54 6.98h5l-.58 2.88h-4.93l-3.26 17.28h0q-.83 3.97-.83 5.31h0q0 3.07 2.68 3.71h0q-.64 2.18-2.94 3.46h0q-2.3 1.28-5.57 1.28h0q-3.26 0-5.12-2.05h0q-1.85-2.05-1.85-5.63zm24.6 4.48h0q-1.5-1.66-2.17-4.29h0q-.67-2.62-.67-6.91h0q0-4.29 1.47-8.19h0q1.47-3.91 4.16-6.72h0q5.5-5.89 14.59-5.89h0q3.26 0 5.63 1.09h0l10.95-1.09-4.74 24.96h0q-.19.77-.19 2.18h0q0 1.4.86 2.3h0q.87.9 2.15 1.02h0q-.64 2.18-2.98 3.46h0q-2.34 1.28-4.96 1.28h0q-2.62 0-4.38-.99h0q-1.76-.99-2.28-2.66h0q-1.02 1.6-3.2 2.63h0q-2.17 1.02-5.08 1.02h0q-2.92 0-5.28-.77h0q-2.37-.77-3.88-2.43zm13.51-25.98h0q-.74 1.15-1.38 3.1h0q-.64 1.95-1.69 7.17h0q-1.06 5.21-1.06 8.93h0q0 3.71.58 4.8h0q.57 1.08 1.6 1.08h0q2.04 0 3.55-1.95h0q1.5-1.95 2.08-5.41h0l3.39-18.75h0q-1.34-1.15-2.91-1.15h0q-1.57 0-2.5.51h0q-.93.51-1.66 1.67zm53.73 23.52h0q-2.69 2.72-6.37 4.19h0q-3.68 1.47-7.33 1.47h0q-3.65 0-4.93-.64h0l-1.98 10.88-12.99 1.28 8.83-45.44 10.43-1.09-.83 4.42h0q2.69-4.55 8.25-4.55h0q6.28 0 9.6 4.04h0q2.95 3.64 2.95 9.21h0q0 5.57-1.47 9.54h0q-1.48 3.97-4.16 6.69zm-14.47-17.96l-3.39 18.76h0q1.34 1.15 3.01 1.15h0q1.66 0 2.62-.64h0q.96-.64 1.67-1.92h0q1.92-3.46 3.45-13.95h0q.45-3.08.45-6.08h0q0-3.01-.67-3.97h0q-.67-.96-1.95-.96h0q-3.91 0-5.19 7.61h0zm49.86 11.52h0q1.6 1.09 1.6 3.49h0q0 2.4-1.22 3.94h0q-1.21 1.53-3.2 2.56h0q-4.09 2.11-8.51 2.11h0q-4.42 0-7.01-.96h0q-2.59-.96-4.32-2.75h0q-3.39-3.39-3.39-9.6h0q0-9.67 5.25-15.55h0q5.63-6.34 15.42-6.34h0q6.08 0 9.09 2.56h0q2.24 1.92 2.24 5.06h0q0 11.26-19.46 11.26h0q-.25 1.66-.25 3.07h0q0 2.95 1.31 4.07h0q1.31 1.12 3.74 1.12h0q2.44 0 5.03-1.12h0q2.59-1.12 3.68-2.92zm-13.06-6.97h0q4.55 0 7.17-2.82h0q2.62-2.69 2.62-6.97h0q0-1.48-.54-2.28h0q-.54-.8-1.63-.8h0q-1.09 0-2.02.42h0q-.93.42-1.89 1.82h0q-2.36 3.2-3.71 10.63zm22.21 11.39h0q0-1.73.9-6.08h0l3.39-17.28h-3.78l.26-1.92h0q7.68-2.3 15.1-7.94h3.07l-1.53 6.98h4.99l-.58 2.88h-4.92l-3.27 17.28h0q-.83 3.97-.83 5.31h0q0 3.07 2.69 3.71h0q-.64 2.18-2.95 3.46h0q-2.3 1.28-5.56 1.28h0q-3.27 0-5.12-2.05h0q-1.86-2.05-1.86-5.63z"
            fill="red"
            stroke="#0f0"
            strokeWidth={1.8}
          />
        </g>
        <path
          d="M128.575 93.52h-13.96l8.13-42.24h14.08l-8.25 42.24zm36.73 1.28h0q-7.74 0-7.74-6.02h0q.06-1.66.57-4.48h0l1.16-5.88h0q1.72-8.32 1.72-10.18h0q0-3.71-2.17-3.71h0q-3.65 0-5.57 9.53h0l-3.78 19.46-12.86 1.28 6.66-33.98 10.49-1.22-1.02 6.27h0q3.01-6.27 12.22-6.27h0q4.48 0 6.37 1.89h0q1.89 1.89 1.89 6.11h0q0 3.97-2.05 13.25h0q-.96 4.16-.96 5.73h0q0 1.56.86 2.46h0q.87.9 2.15 1.02h0q-.64 2.18-2.85 3.46h0q-2.21 1.28-5.09 1.28zm32.19-23.74h0q.9-2.37.9-4.42h0q0-3.78-3.07-3.78h0q-1.6 0-2.91 1.44h0q-1.32 1.44-1.32 3.24h0q0 1.28 1.03 2.3h0q1.47 1.41 5.25 3.71h0q3.77 2.31 5.21 4.19h0q1.44 1.89 1.44 4.48h0q0 2.6-1.25 4.96h0q-1.24 2.37-3.48 4.04h0q-4.8 3.58-12.48 3.58h0q-4.16 0-7.36-2.18h0q-3.2-2.11-3.2-4.6h0q0-2.5 1.82-3.97h0q1.82-1.47 4.51-1.47h0q2.69 0 4.35 1.02h0q-.83 2.11-.83 3.52h0q0 4.22 3.59 4.22h0q1.53 0 2.56-.96h0q1.02-.96 1.02-2.62h0q0-3.26-5.5-6.72h0q-4.48-2.94-5.51-4.1h0q-1.73-2.04-1.73-4.6h0q0-2.56 1.22-5h0q1.22-2.43 3.46-4.16h0q4.67-3.58 12.8-3.58h0q4.16 0 6.62 1.66h0q2.46 1.67 2.46 4.48h0q0 2.82-1.69 4.42h0q-1.7 1.6-4.77 1.6h0q-2.11 0-3.14-.7zm13 16.06h0q0-1.73.89-6.08h0l3.39-17.28h-3.77l.25-1.92h0q7.68-2.3 15.11-7.94h3.07l-1.54 6.98h5l-.58 2.88h-4.93l-3.26 17.28h0q-.83 3.97-.83 5.31h0q0 3.07 2.68 3.71h0q-.64 2.18-2.94 3.46h0q-2.3 1.28-5.57 1.28h0q-3.26 0-5.12-2.05h0q-1.85-2.05-1.85-5.63zm24.6 4.48h0q-1.5-1.66-2.17-4.29h0q-.67-2.62-.67-6.91h0q0-4.29 1.47-8.19h0q1.47-3.91 4.16-6.72h0q5.5-5.89 14.59-5.89h0q3.26 0 5.63 1.09h0l10.95-1.09-4.74 24.96h0q-.19.77-.19 2.18h0q0 1.4.86 2.3h0q.87.9 2.15 1.02h0q-.64 2.18-2.98 3.46h0q-2.34 1.28-4.96 1.28h0q-2.62 0-4.38-.99h0q-1.76-.99-2.28-2.66h0q-1.02 1.6-3.2 2.63h0q-2.17 1.02-5.08 1.02h0q-2.92 0-5.28-.77h0q-2.37-.77-3.88-2.43zm13.51-25.98h0q-.74 1.15-1.38 3.1h0q-.64 1.95-1.69 7.17h0q-1.06 5.21-1.06 8.93h0q0 3.71.58 4.8h0q.57 1.08 1.6 1.08h0q2.04 0 3.55-1.95h0q1.5-1.95 2.08-5.41h0l3.39-18.75h0q-1.34-1.15-2.91-1.15h0q-1.57 0-2.5.51h0q-.93.51-1.66 1.67zm53.73 23.52h0q-2.69 2.72-6.37 4.19h0q-3.68 1.47-7.33 1.47h0q-3.65 0-4.93-.64h0l-1.98 10.88-12.99 1.28 8.83-45.44 10.43-1.09-.83 4.42h0q2.69-4.55 8.25-4.55h0q6.28 0 9.6 4.04h0q2.95 3.64 2.95 9.21h0q0 5.57-1.47 9.54h0q-1.48 3.97-4.16 6.69zm-14.47-17.96l-3.39 18.76h0q1.34 1.15 3.01 1.15h0q1.66 0 2.62-.64h0q.96-.64 1.67-1.92h0q1.92-3.46 3.45-13.95h0q.45-3.08.45-6.08h0q0-3.01-.67-3.97h0q-.67-.96-1.95-.96h0q-3.91 0-5.19 7.61h0zm49.86 11.52h0q1.6 1.09 1.6 3.49h0q0 2.4-1.22 3.94h0q-1.21 1.53-3.2 2.56h0q-4.09 2.11-8.51 2.11h0q-4.42 0-7.01-.96h0q-2.59-.96-4.32-2.75h0q-3.39-3.39-3.39-9.6h0q0-9.67 5.25-15.55h0q5.63-6.34 15.42-6.34h0q6.08 0 9.09 2.56h0q2.24 1.92 2.24 5.06h0q0 11.26-19.46 11.26h0q-.25 1.66-.25 3.07h0q0 2.95 1.31 4.07h0q1.31 1.12 3.74 1.12h0q2.44 0 5.03-1.12h0q2.59-1.12 3.68-2.92zm-13.06-6.97h0q4.55 0 7.17-2.82h0q2.62-2.69 2.62-6.97h0q0-1.48-.54-2.28h0q-.54-.8-1.63-.8h0q-1.09 0-2.02.42h0q-.93.42-1.89 1.82h0q-2.36 3.2-3.71 10.63zm22.21 11.39h0q0-1.73.9-6.08h0l3.39-17.28h-3.78l.26-1.92h0q7.68-2.3 15.1-7.94h3.07l-1.53 6.98h4.99l-.58 2.88h-4.92l-3.27 17.28h0q-.83 3.97-.83 5.31h0q0 3.07 2.69 3.71h0q-.64 2.18-2.95 3.46h0q-2.3 1.28-5.56 1.28h0q-3.27 0-5.12-2.05h0q-1.86-2.05-1.86-5.63z"
          fill="none"
          stroke="rgba(82.55489297907839%,37.05250673854447%,85.90476190476191%,0.809)"
          strokeWidth={2.1}
        />
        <style />
      </Svg>
    </Link>
  );
};
