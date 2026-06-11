import React, { useMemo } from "react";

/**
 * Single-file trial renderer for an inward-view door drawing.
 *
 * Założenia:
 * - jeden plik JSX
 * - SVG zamiast canvas, żeby techniczny rysunek był ostrzejszy
 * - kolejność zgodna z logiką: rama -> skrzydło -> listwy -> podziały/wypełnienia -> okucia -> wymiary
 * - dane trzymane lokalnie w tym pliku
 */

export default function DoorTechnicalTrial() {
  const cfg = {
    door: { width: 1100, height: 2100 },
    frame: { face: 30, depth: 52 },
    sash: { face: 36, depth: 48, overlap: 12 },
    beads: { width: 18 },
    layout: {
      transomY: 1048,
      glassTop: { code: "1.02", visibleWidth: 784, visibleHeight: 850 },
      panelBottom: { code: "1.1", label: "Panel PVC 24" },
    },
    hardware: {
      handleY: 1048,
      hinges: 2,
      opening: "IN",
    },
  };

  const geo = useMemo(() => {
    const scale = 0.36;
    const pad = 180;
    const mm = (n) => n * scale;

    const outer = {
      x: pad,
      y: pad,
      width: mm(cfg.door.width),
      height: mm(cfg.door.height),
    };

    const deflate = (r, v) => ({
      x: r.x + v,
      y: r.y + v,
      width: r.width - 2 * v,
      height: r.height - 2 * v,
    });

    const frameOuter = outer;
    const frameInner = deflate(frameOuter, mm(cfg.frame.face));

    // Widok od wewnątrz: skrzydło nachodzi na ramę (Überlappung)
    const sashOuter = {
      x: frameInner.x - mm(cfg.sash.overlap),
      y: frameInner.y - mm(cfg.sash.overlap),
      width: frameInner.width + 2 * mm(cfg.sash.overlap),
      height: frameInner.height + 2 * mm(cfg.sash.overlap),
    };

    const sashInner = deflate(sashOuter, mm(cfg.sash.face));

    const transomY = sashOuter.y + mm(cfg.layout.transomY);
    const transomFace = mm(32);
    const transomRect = {
      x: sashInner.x,
      y: transomY - transomFace / 2,
      width: sashInner.width,
      height: transomFace,
    };

    // Listwy przyszybowe dla pola górnego
    const topPocket = {
      x: sashInner.x,
      y: sashInner.y,
      width: sashInner.width,
      height: transomRect.y - sashInner.y,
    };
    const topBeadOuter = deflate(topPocket, mm(10));
    const topGlass = deflate(topBeadOuter, mm(cfg.beads.width));

    // Dolne pole panelowe
    const bottomPocket = {
      x: sashInner.x,
      y: transomRect.y + transomRect.height,
      width: sashInner.width,
      height: sashInner.y + sashInner.height - (transomRect.y + transomRect.height),
    };
    const bottomBeadOuter = deflate(bottomPocket, mm(10));
    const bottomPanel = deflate(bottomBeadOuter, mm(cfg.beads.width));

    const centerX = frameOuter.x + frameOuter.width / 2;

    const handle = {
      plate: {
        x: sashOuter.x - mm(14),
        y: transomY - mm(54),
        width: mm(22),
        height: mm(110),
      },
      spindleY: transomY,
      leverLen: mm(54),
    };

    const hingeXs = sashOuter.x + sashOuter.width;
    const hingeYs = [sashOuter.y + mm(80), sashOuter.y + sashOuter.height - mm(180)];

    return {
      scale,
      mm,
      pad,
      svgW: frameOuter.width + pad * 2,
      svgH: frameOuter.height + pad * 2,
      frameOuter,
      frameInner,
      sashOuter,
      sashInner,
      transomRect,
      topBeadOuter,
      topGlass,
      bottomBeadOuter,
      bottomPanel,
      handle,
      hingeXs,
      hingeYs,
      centerX,
      transomY,
    };
  }, []);

  const styles = {
    line: "#444",
    aux: "#8a8a8a",
    glass: "#b8cce2",
    fill: "#dcdcdc",
    text: "#1d1d1d",
    accent: "#8a0000",
  };

  const Rect = ({ r, fill = "none", stroke = styles.line, sw = 1.4 }) => (
    <rect x={r.x} y={r.y} width={r.width} height={r.height} fill={fill} stroke={stroke} strokeWidth={sw} />
  );

  const Welds = ({ r, inset = 8, len = 28 }) => {
    const x1 = r.x + inset;
    const y1 = r.y + inset;
    const x2 = r.x + r.width - inset;
    const y2 = r.y + r.height - inset;
    return (
      <g stroke={styles.aux} strokeWidth="1">
        <line x1={x1} y1={y1} x2={x1 + len} y2={y1 + len} />
        <line x1={x2} y1={y1} x2={x2 - len} y2={y1 + len} />
        <line x1={x1} y1={y2} x2={x1 + len} y2={y2 - len} />
        <line x1={x2} y1={y2} x2={x2 - len} y2={y2 - len} />
      </g>
    );
  };

  const BeadMiters = ({ r, inset = 0, len = 20 }) => {
    const x1 = r.x + inset;
    const y1 = r.y + inset;
    const x2 = r.x + r.width - inset;
    const y2 = r.y + r.height - inset;
    return (
      <g stroke={styles.aux} strokeWidth="1">
        <line x1={x1} y1={y1 + len} x2={x1 + len} y2={y1} />
        <line x1={x2 - len} y1={y1} x2={x2} y2={y1 + len} />
        <line x1={x1} y1={y2 - len} x2={x1 + len} y2={y2} />
        <line x1={x2 - len} y1={y2} x2={x2} y2={y2 - len} />
      </g>
    );
  };

  const DimensionH = ({ x1, x2, y, label }) => (
    <g stroke={styles.line} strokeWidth="1" fill="none">
      <line x1={x1} y1={y} x2={x2} y2={y} />
      <line x1={x1} y1={y - 8} x2={x1} y2={y + 8} />
      <line x1={x2} y1={y - 8} x2={x2} y2={y + 8} />
      <path d={`M ${x1 + 10} ${y - 5} L ${x1} ${y} L ${x1 + 10} ${y + 5}`} stroke={styles.line} />
      <path d={`M ${x2 - 10} ${y - 5} L ${x2} ${y} L ${x2 - 10} ${y + 5}`} stroke={styles.line} />
      <text x={(x1 + x2) / 2} y={y - 10} textAnchor="middle" fontSize="17" fill={styles.text}>{label}</text>
    </g>
  );

  const DimensionV = ({ y1, y2, x, label, fontSize = 17 }) => (
    <g stroke={styles.line} strokeWidth="1" fill="none">
      <line x1={x} y1={y1} x2={x} y2={y2} />
      <line x1={x - 8} y1={y1} x2={x + 8} y2={y1} />
      <line x1={x - 8} y1={y2} x2={x + 8} y2={y2} />
      <path d={`M ${x - 5} ${y1 + 10} L ${x} ${y1} L ${x + 5} ${y1 + 10}`} stroke={styles.line} />
      <path d={`M ${x - 5} ${y2 - 10} L ${x} ${y2} L ${x + 5} ${y2 - 10}`} stroke={styles.line} />
      <text
        x={x + 24}
        y={(y1 + y2) / 2}
        transform={`rotate(-90 ${x + 24} ${(y1 + y2) / 2})`}
        textAnchor="middle"
        fontSize={fontSize}
        fill={styles.text}
      >
        {label}
      </text>
    </g>
  );

  return (
    <div className="w-full overflow-auto rounded-2xl border border-neutral-300 bg-neutral-100 p-4">
      <svg
        viewBox={`0 0 ${geo.svgW} ${geo.svgH}`}
        className="mx-auto block h-auto max-w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width={geo.svgW} height={geo.svgH} fill="#ececec" />

        {/* 1. Rama */}
        <Rect r={geo.frameOuter} stroke="#6b6b6b" sw={1.5} />
        <Rect r={geo.frameInner} stroke="#8b8b8b" sw={1.2} />
        <Welds r={geo.frameInner} len={24} />

        {/* 2. Skrzydło z Überlappung */}
        <Rect r={geo.sashOuter} stroke="#555" sw={1.5} />
        <Rect r={geo.sashInner} stroke="#6a6a6a" sw={1.2} />
        <Welds r={geo.sashOuter} len={34} />

        {/* 3. Poprzeczka */}
        <Rect r={geo.transomRect} stroke="#5f5f5f" sw={1.2} />

        {/* 4. Listwy przyszybowe */}
        <Rect r={geo.topBeadOuter} stroke="#7a7a7a" sw={1.1} />
        <BeadMiters r={geo.topBeadOuter} len={20} />
        <Rect r={geo.bottomBeadOuter} stroke="#7a7a7a" sw={1.1} />
        <BeadMiters r={geo.bottomBeadOuter} len={20} />

        {/* 5. Wypełnienia */}
        <Rect r={geo.topGlass} fill={styles.glass} stroke="#7f9ab4" sw={1.1} />
        <Rect r={geo.bottomPanel} fill="#dddddd" stroke="#9b9b9b" sw={1.1} />

        {/* 6. Opisy pól */}
        <text
          x={geo.topGlass.x + geo.topGlass.width / 2}
          y={geo.topGlass.y + geo.topGlass.height / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="18"
          fill={styles.text}
        >
          {cfg.layout.glassTop.code}
        </text>

        <text
          x={geo.topGlass.x + geo.topGlass.width / 2}
          y={geo.transomRect.y - 12}
          textAnchor="middle"
          fontSize="17"
          fill={styles.text}
        >
          {cfg.layout.glassTop.visibleWidth} x {cfg.layout.glassTop.visibleHeight}
        </text>

        <text
          x={geo.bottomPanel.x + geo.bottomPanel.width / 2}
          y={geo.bottomPanel.y + geo.bottomPanel.height / 2 - 10}
          textAnchor="middle"
          fontSize="21"
          fill={styles.text}
        >
          {cfg.layout.panelBottom.label}
        </text>

        <text
          x={geo.bottomPanel.x + geo.bottomPanel.width / 2}
          y={geo.bottomPanel.y + geo.bottomPanel.height / 2 + 16}
          textAnchor="middle"
          fontSize="18"
          fill={styles.text}
        >
          {cfg.layout.panelBottom.code}
        </text>

        {/* Symbol otwierania */}
        <g>
          <rect
            x={geo.bottomPanel.x + geo.bottomPanel.width * 0.37}
            y={geo.bottomPanel.y + geo.bottomPanel.height * 0.34}
            width="96"
            height="42"
            fill="none"
            stroke="#7a7a7a"
            strokeWidth="1"
          />
          <text
            x={geo.bottomPanel.x + geo.bottomPanel.width * 0.37 + 48}
            y={geo.bottomPanel.y + geo.bottomPanel.height * 0.34 + 29}
            textAnchor="middle"
            fontSize="17"
            fill={styles.text}
          >
            {cfg.hardware.opening}
          </text>
          <line
            x1={geo.bottomPanel.x + geo.bottomPanel.width * 0.37 + 18}
            y1={geo.bottomPanel.y + geo.bottomPanel.height * 0.34 + 12}
            x2={geo.bottomPanel.x + geo.bottomPanel.width * 0.37 + 78}
            y2={geo.bottomPanel.y + geo.bottomPanel.height * 0.34 + 12}
            stroke={styles.accent}
            strokeWidth="1"
          />
          <rect
            x={geo.bottomPanel.x + geo.bottomPanel.width * 0.37 + 14}
            y={geo.bottomPanel.y + geo.bottomPanel.height * 0.34 + 9}
            width="6"
            height="6"
            fill={styles.accent}
          />
          <rect
            x={geo.bottomPanel.x + geo.bottomPanel.width * 0.37 + 74}
            y={geo.bottomPanel.y + geo.bottomPanel.height * 0.34 + 9}
            width="6"
            height="6"
            fill={styles.accent}
          />
        </g>

        {/* 7. Klamka */}
        <g stroke={styles.line} fill="none">
          <rect
            x={geo.handle.plate.x}
            y={geo.handle.plate.y}
            width={geo.handle.plate.width}
            height={geo.handle.plate.height}
            rx="8"
            strokeWidth="1.3"
          />
          <circle
            cx={geo.handle.plate.x + geo.handle.plate.width / 2}
            cy={geo.handle.plate.y + geo.handle.plate.height * 0.68}
            r="2.2"
            strokeWidth="1.2"
          />
          <line
            x1={geo.handle.plate.x + geo.handle.plate.width / 2}
            y1={geo.handle.spindleY}
            x2={geo.handle.plate.x + geo.handle.plate.width / 2 + geo.handle.leverLen}
            y2={geo.handle.spindleY}
            strokeWidth="2"
          />
          <line
            x1={geo.handle.plate.x + geo.handle.plate.width / 2 + geo.handle.leverLen}
            y1={geo.handle.spindleY}
            x2={geo.handle.plate.x + geo.handle.plate.width / 2 + geo.handle.leverLen + 10}
            y2={geo.handle.spindleY - 4}
            strokeWidth="2"
          />
        </g>

        {/* 8. Zawiasy */}
        <g stroke={styles.line} fill="none" strokeWidth="1.1">
          {geo.hingeYs.map((y, i) => (
            <g key={i}>
              <rect x={geo.hingeXs - 4} y={y} width="16" height="12" />
              <rect x={geo.hingeXs + 12} y={y + 2} width="8" height="18" />
            </g>
          ))}
        </g>

        {/* 9. Linia diagonalna skrzydła */}
        <line
          x1={geo.sashOuter.x}
          y1={geo.sashOuter.y}
          x2={geo.sashOuter.x + geo.sashOuter.width}
          y2={geo.sashOuter.y + geo.sashOuter.height}
          stroke="#666"
          strokeWidth="1"
        />

        {/* 10. Wymiary i linie pomocnicze */}
        <g stroke={styles.aux} strokeWidth="1" fill="none">
          <line x1={geo.frameOuter.x} y1={geo.frameOuter.y} x2={geo.frameOuter.x} y2={geo.frameOuter.y - 44} />
          <line x1={geo.frameOuter.x + geo.frameOuter.width} y1={geo.frameOuter.y} x2={geo.frameOuter.x + geo.frameOuter.width} y2={geo.frameOuter.y - 44} />
          <line x1={geo.frameOuter.x + geo.frameOuter.width} y1={geo.frameOuter.y} x2={geo.frameOuter.x + geo.frameOuter.width + 42} y2={geo.frameOuter.y} />
          <line x1={geo.frameOuter.x + geo.frameOuter.width} y1={geo.frameOuter.y + geo.frameOuter.height} x2={geo.frameOuter.x + geo.frameOuter.width + 42} y2={geo.frameOuter.y + geo.frameOuter.height} />
          <line x1={geo.frameOuter.x - 46} y1={geo.transomY} x2={geo.frameOuter.x + 6} y2={geo.transomY} />
          <line x1={geo.frameOuter.x - 82} y1={geo.transomY - 15} x2={geo.frameOuter.x + 6} y2={geo.transomY - 15} />
          <line x1={geo.frameOuter.x - 82} y1={geo.transomY + 15} x2={geo.frameOuter.x + 6} y2={geo.transomY + 15} />
        </g>

        <DimensionH
          x1={geo.frameOuter.x}
          x2={geo.frameOuter.x + geo.frameOuter.width}
          y={geo.frameOuter.y - 44}
          label="1100"
        />

        <DimensionV
          y1={geo.frameOuter.y}
          y2={geo.frameOuter.y + geo.frameOuter.height}
          x={geo.frameOuter.x + geo.frameOuter.width + 42}
          label="2100"
        />

        <DimensionV
          y1={geo.sashOuter.y}
          y2={geo.sashOuter.y + geo.sashOuter.height}
          x={geo.frameOuter.x + geo.frameOuter.width + 78}
          label="2080"
        />

        <DimensionV
          y1={geo.frameOuter.y}
          y2={geo.transomY}
          x={geo.frameOuter.x - 46}
          label="1050"
        />

        <DimensionV
          y1={geo.transomY}
          y2={geo.frameOuter.y + geo.frameOuter.height}
          x={geo.frameOuter.x - 46}
          label="1050"
        />

        <DimensionV
          y1={geo.frameOuter.y}
          y2={geo.transomY - 15}
          x={geo.frameOuter.x - 82}
          label="1008"
        />

        <DimensionV
          y1={geo.transomY + 15}
          y2={geo.frameOuter.y + geo.frameOuter.height}
          x={geo.frameOuter.x - 82}
          label="1008"
        />

        <DimensionV
          y1={geo.transomY - 15}
          y2={geo.transomY + 15}
          x={geo.frameOuter.x - 118}
          label="84"
          fontSize={15}
        />

        <text
          x={geo.sashOuter.x + 20}
          y={geo.sashOuter.y + geo.sashOuter.height * 0.68}
          transform={`rotate(-90 ${geo.sashOuter.x + 20} ${geo.sashOuter.y + geo.sashOuter.height * 0.68})`}
          textAnchor="middle"
          fontSize="20"
          fill={styles.text}
        >
          1040
        </text>
      </svg>
    </div>
  );
}
