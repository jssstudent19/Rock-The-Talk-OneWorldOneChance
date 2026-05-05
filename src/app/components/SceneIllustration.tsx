"use client";

import { SlideTheme } from "../data/slides";

export default function SceneIllustration({ theme }: { theme: SlideTheme }) {
  return (
    <div className={`scene scene-${theme}`}>
      {theme === "space" && <SpaceScene />}
      {theme === "nature" && <NatureScene />}
      {theme === "fire" && <FireScene />}
      {theme === "ancient" && <AncientScene />}
      {theme === "industrial" && <IndustrialScene />}
      {theme === "war" && <WarScene />}
      {theme === "plastic" && <PlasticScene />}
      {theme === "nuclear" && <NuclearScene />}
      {theme === "climate" && <ClimateScene />}
      {theme === "flood" && <FloodScene />}
      {theme === "apocalypse" && <ApocalypseScene />}
      {theme === "last" && <LastScene />}
      {theme === "silence" && <SilenceScene />}
      {theme === "close" && <CloseScene />}
      {theme === "end" && <EndScene />}
    </div>
  );
}

function SpaceScene() {
  return (
    <svg viewBox="0 0 800 400" className="scene-svg">
      {/* Stars */}
      {Array.from({length:60}).map((_,i)=>(
        <circle key={i} cx={Math.sin(i*137.5)*380+400} cy={Math.cos(i*97.3)*180+200}
          r={Math.random()*1.5+0.5} fill="#fff" opacity={0.4+Math.random()*0.6}/>
      ))}
      {/* Planet/disc */}
      <circle cx="400" cy="200" r="60" fill="none" stroke="#c9922f" strokeWidth="3" opacity="0.8"/>
      <circle cx="400" cy="200" r="55" fill="none" stroke="#c9922f" strokeWidth="1" opacity="0.4"/>
      <circle cx="400" cy="200" r="4" fill="#ffd700"/>
      <ellipse cx="400" cy="200" rx="80" ry="12" fill="none" stroke="#c9922f" strokeWidth="2" opacity="0.5"/>
      {/* Alien silhouette */}
      <ellipse cx="600" cy="240" rx="28" ry="40" fill="#1a1a3a" opacity="0.8"/>
      <ellipse cx="600" cy="190" rx="22" ry="28" fill="#1a1a3a" opacity="0.8"/>
      <ellipse cx="588" cy="182" rx="5" ry="3" fill="#7af7ff" opacity="0.9"/>
      <ellipse cx="612" cy="182" rx="5" ry="3" fill="#7af7ff" opacity="0.9"/>
      {/* Arm reaching */}
      <line x1="572" y1="220" x2="480" y2="200" stroke="#1a1a3a" strokeWidth="8" strokeLinecap="round"/>
    </svg>
  );
}

function NatureScene() {
  return (
    <svg viewBox="0 0 800 400" className="scene-svg">
      <rect x="0" y="0" width="800" height="250" fill="#87ceeb" opacity="0.6"/>
      <circle cx="120" cy="80" r="50" fill="#f6d860" opacity="0.9"/>
      {/* Mountains */}
      <polygon points="0,400 200,160 400,400" fill="#5a8a3c" opacity="0.8"/>
      <polygon points="150,400 380,120 600,400" fill="#4a7a2c" opacity="0.9"/>
      <polygon points="400,400 620,150 800,400" fill="#3d6b24" opacity="0.85"/>
      {/* Ground */}
      <rect x="0" y="340" width="800" height="60" fill="#4a7a2c"/>
      {/* Trees */}
      {[80,200,520,660,750].map((x,i)=>(
        <g key={i}>
          <rect x={x-5} y={280} width="10" height="60" fill="#6b4226"/>
          <polygon points={`${x},200 ${x-35},300 ${x+35},300`} fill="#2d8a22"/>
          <polygon points={`${x},240 ${x-25},310 ${x+25},310`} fill="#3aaa2a"/>
        </g>
      ))}
      {/* Birds */}
      {[300,400,500].map((x,i)=>(
        <path key={i} d={`M${x},${80+i*20} q10,-8 20,0 q10,8 20,0`} fill="none" stroke="#1a1a1a" strokeWidth="2"/>
      ))}
    </svg>
  );
}

function FireScene() {
  return (
    <svg viewBox="0 0 800 400" className="scene-svg">
      <rect x="0" y="0" width="800" height="400" fill="#1a0800" opacity="0.9"/>
      {/* Cave opening */}
      <ellipse cx="400" cy="380" rx="300" ry="200" fill="#0a0500"/>
      {/* Fire */}
      <ellipse cx="400" cy="320" rx="40" ry="15" fill="#ff6600" opacity="0.8"/>
      <polygon points="380,320 400,220 420,320" fill="#ff4400" opacity="0.9"/>
      <polygon points="390,320 400,240 415,320" fill="#ffaa00" opacity="0.8"/>
      <polygon points="370,320 395,260 405,320" fill="#ff6600" opacity="0.7"/>
      <polygon points="400,320 410,250 425,320" fill="#ff8800" opacity="0.8"/>
      {/* Silhouettes of people */}
      {[250,310,370,430,490,550].map((x,i)=>(
        <g key={i}>
          <ellipse cx={x} cy={340} rx={18} ry={30} fill="#0a0500"/>
          <ellipse cx={x} cy={302} rx={12} ry={15} fill="#0a0500"/>
        </g>
      ))}
      {/* Stars outside cave */}
      {Array.from({length:20}).map((_,i)=>(
        <circle key={i} cx={50+i*36} cy={30+Math.sin(i)*20} r="1.5" fill="#fff" opacity="0.7"/>
      ))}
    </svg>
  );
}

function AncientScene() {
  return (
    <svg viewBox="0 0 800 400" className="scene-svg">
      <rect x="0" y="0" width="800" height="260" fill="#d4a855" opacity="0.5"/>
      <circle cx="700" cy="80" r="55" fill="#f6d860" opacity="0.9"/>
      {/* Desert ground */}
      <rect x="0" y="280" width="800" height="120" fill="#c89040"/>
      {/* Pyramids */}
      <polygon points="100,280 260,100 420,280" fill="#b8852e"/>
      <polygon points="100,280 260,100 420,280" fill="none" stroke="#8b6020" strokeWidth="2"/>
      <polygon points="420,280 540,150 660,280" fill="#a87020"/>
      <polygon points="600,280 680,180 760,280" fill="#c89540" opacity="0.8"/>
      {/* Sphinx outline */}
      <rect x="160" y="250" width="80" height="30" fill="#c89040"/>
      <ellipse cx="240" cy="245" rx="25" ry="30" fill="#c89040"/>
      {/* Sun rays */}
      {Array.from({length:8}).map((_,i)=>(
        <line key={i} x1="700" y1="80"
          x2={700+Math.cos(i*Math.PI/4)*90} y2={80+Math.sin(i*Math.PI/4)*90}
          stroke="#f6d860" strokeWidth="2" opacity="0.4"/>
      ))}
    </svg>
  );
}

function IndustrialScene() {
  return (
    <svg viewBox="0 0 800 400" className="scene-svg">
      <rect x="0" y="0" width="800" height="400" fill="#2a2a2a" opacity="0.9"/>
      {/* Sky smog */}
      <rect x="0" y="0" width="800" height="200" fill="#4a3a2a" opacity="0.6"/>
      {/* Factories */}
      {[60,200,340,500,650].map((x,i)=>(
        <g key={i}>
          <rect x={x} y={220+i*5} width={90+i*10} height={160-i*10} fill="#333"/>
          <rect x={x+10} y={200+i*5} width="18" height="80" fill="#444"/>
          <rect x={x+35} y={180+i*5} width="20" height="100" fill="#3a3a3a"/>
          <rect x={x+62} y={195+i*5} width="16" height="85" fill="#444"/>
          {/* Smoke */}
          <ellipse cx={x+19} cy={190+i*5} rx="14" ry="20" fill="#666" opacity="0.6"/>
          <ellipse cx={x+19} cy={165+i*5} rx="18" ry="22" fill="#777" opacity="0.5"/>
          <ellipse cx={x+45} cy={165+i*5} rx="16" ry="20" fill="#666" opacity="0.5"/>
          <ellipse cx={x+70} cy={178+i*5} rx="14" ry="18" fill="#777" opacity="0.4"/>
        </g>
      ))}
      {/* Ground */}
      <rect x="0" y="360" width="800" height="40" fill="#1a1a1a"/>
      {/* Red sun */}
      <circle cx="400" cy="60" r="40" fill="#cc3300" opacity="0.5"/>
    </svg>
  );
}

function WarScene() {
  return (
    <svg viewBox="0 0 800 400" className="scene-svg">
      <rect x="0" y="0" width="800" height="400" fill="#1a0800"/>
      {/* Dark red sky */}
      <rect x="0" y="0" width="800" height="220" fill="#3a0a00" opacity="0.9"/>
      {/* Explosions */}
      {[150,400,620].map((x,i)=>(
        <g key={i}>
          <circle cx={x} cy={180-i*20} r={50+i*15} fill="#ff4400" opacity="0.3"/>
          <circle cx={x} cy={180-i*20} r={30+i*10} fill="#ff6600" opacity="0.5"/>
          <circle cx={x} cy={180-i*20} r={15+i*5} fill="#ffaa00" opacity="0.8"/>
        </g>
      ))}
      {/* Ruined buildings */}
      {[50,200,380,560,700].map((x,i)=>(
        <g key={i}>
          <rect x={x} y={240} width={60+i*8} height={140-i*5} fill="#2a1a0a" opacity="0.9"/>
          <rect x={x+10} y={220} width="20" height="40" fill="#1a0f05"/>
          {/* Broken wall */}
          <polygon points={`${x},240 ${x+20},200 ${x+40},240`} fill="#2a1a0a"/>
        </g>
      ))}
      {/* Smoke plumes */}
      {[200,420,580].map((x,i)=>(
        <ellipse key={i} cx={x} cy={100} rx={40} ry={60} fill="#333" opacity="0.5"/>
      ))}
      <rect x="0" y="360" width="800" height="40" fill="#0a0500"/>
    </svg>
  );
}

function PlasticScene() {
  return (
    <svg viewBox="0 0 800 400" className="scene-svg">
      {/* Ocean */}
      <rect x="0" y="0" width="800" height="400" fill="#1a3a5c"/>
      {/* Waves */}
      {[0,1,2,3,4].map(i=>(
        <path key={i} d={`M0,${120+i*50} q100,-20 200,0 q100,20 200,0 q100,-20 200,0 q100,20 200,0`}
          fill="none" stroke="#2a5a8c" strokeWidth="3" opacity="0.5"/>
      ))}
      {/* Plastic waste */}
      {Array.from({length:40}).map((_,i)=>(
        <rect key={i}
          x={Math.sin(i*53.7)*360+400} y={100+Math.cos(i*73.1)*120}
          width={10+Math.random()*20} height={5+Math.random()*10}
          fill={["#ff6688","#ffcc44","#44aaff","#ff4422","#88ff44"][i%5]}
          opacity="0.7" rx="2"
          transform={`rotate(${i*37},${Math.sin(i*53.7)*360+400},${100+Math.cos(i*73.1)*120})`}
        />
      ))}
      {/* Dead fish */}
      {[200,400,600].map((x,i)=>(
        <g key={i} opacity="0.6">
          <ellipse cx={x} cy={200+i*30} rx="30" ry="12" fill="#8a8a6a"/>
          <polygon points={`${x+30},${200+i*30} ${x+50},${185+i*30} ${x+50},${215+i*30}`} fill="#8a8a6a"/>
          <circle cx={x-15} cy={196+i*30} r="4" fill="#1a1a1a"/>
        </g>
      ))}
    </svg>
  );
}

function NuclearScene() {
  return (
    <svg viewBox="0 0 800 400" className="scene-svg">
      <rect x="0" y="0" width="800" height="400" fill="#0a1a0a"/>
      {/* Eerie green glow */}
      <circle cx="400" cy="200" r="200" fill="#00ff44" opacity="0.05"/>
      <circle cx="400" cy="200" r="120" fill="#00ff44" opacity="0.07"/>
      {/* Cooling towers */}
      <polygon points="120,400 160,200 240,400" fill="#2a2a2a"/>
      <polygon points="200,400 240,200 320,400" fill="#222"/>
      <ellipse cx="220" cy="200" rx="60" ry="20" fill="#2a2a2a"/>
      <polygon points="500,400 540,200 620,400" fill="#2a2a2a"/>
      <ellipse cx="560" cy="200" rx="60" ry="20" fill="#2a2a2a"/>
      {/* Nuclear symbol */}
      <circle cx="400" cy="200" r="50" fill="none" stroke="#00ff44" strokeWidth="3" opacity="0.6"/>
      <circle cx="400" cy="200" r="12" fill="#00ff44" opacity="0.8"/>
      {[0,120,240].map((angle,i)=>(
        <path key={i}
          d={`M${400+Math.cos((angle-30)*Math.PI/180)*15},${200+Math.sin((angle-30)*Math.PI/180)*15}
             A45,45 0 0,1 ${400+Math.cos((angle+30)*Math.PI/180)*45},${200+Math.sin((angle+30)*Math.PI/180)*45}
             L${400+Math.cos((angle+30)*Math.PI/180)*15},${200+Math.sin((angle+30)*Math.PI/180)*15} Z`}
          fill="#00ff44" opacity="0.7"/>
      ))}
      {/* Warning stripes */}
      <rect x="0" y="370" width="800" height="30" fill="#333"/>
      {Array.from({length:20}).map((_,i)=>(
        <rect key={i} x={i*40} y="370" width="20" height="30" fill="#aa8800" opacity="0.8"/>
      ))}
    </svg>
  );
}

function ClimateScene() {
  return (
    <svg viewBox="0 0 800 400" className="scene-svg">
      {/* Hot orange sky */}
      <rect x="0" y="0" width="800" height="400" fill="#ff4400" opacity="0.3"/>
      <rect x="0" y="0" width="800" height="200" fill="#cc2200" opacity="0.4"/>
      {/* Sun — huge and angry */}
      <circle cx="400" cy="60" r="80" fill="#ff6600" opacity="0.6"/>
      <circle cx="400" cy="60" r="55" fill="#ff8800" opacity="0.8"/>
      {Array.from({length:12}).map((_,i)=>(
        <line key={i} x1={400+Math.cos(i*30*Math.PI/180)*60} y1={60+Math.sin(i*30*Math.PI/180)*60}
          x2={400+Math.cos(i*30*Math.PI/180)*110} y2={60+Math.sin(i*30*Math.PI/180)*110}
          stroke="#ff6600" strokeWidth="3" opacity="0.5"/>
      ))}
      {/* Cracked earth */}
      <rect x="0" y="280" width="800" height="120" fill="#8b4513"/>
      {/* Cracks */}
      {[100,250,400,560,700].map((x,i)=>(
        <g key={i}>
          <path d={`M${x},280 l20,40 l-10,30 l25,50`} stroke="#4a2200" strokeWidth="3" fill="none"/>
          <path d={`M${x+10},280 l-15,35 l20,25 l-10,60`} stroke="#3a1a00" strokeWidth="2" fill="none"/>
        </g>
      ))}
      {/* Melting ice blocks */}
      {[50,680].map((x,i)=>(
        <g key={i}>
          <rect x={x} y={230} width={80} height={50} fill="#aaddff" opacity="0.6" rx="4"/>
          <path d={`M${x+10},280 q20,30 40,20 q20,30 30,20`} fill="#aaddff" opacity="0.3"/>
        </g>
      ))}
    </svg>
  );
}

function FloodScene() {
  return (
    <svg viewBox="0 0 800 400" className="scene-svg">
      <rect x="0" y="0" width="800" height="400" fill="#0a1a2a"/>
      {/* Flood water */}
      <rect x="0" y="240" width="800" height="160" fill="#1a3a6c" opacity="0.8"/>
      {/* Waves on water */}
      {[0,1,2].map(i=>(
        <path key={i} d={`M0,${250+i*20} q100,-10 200,0 q100,10 200,0 q100,-10 200,0 q100,10 200,0`}
          fill="none" stroke="#2a5aaa" strokeWidth="2" opacity="0.5"/>
      ))}
      {/* Submerged city buildings */}
      {[40,180,300,440,580,700].map((x,i)=>(
        <g key={i} opacity="0.7">
          <rect x={x} y={100+i*10} width={60+i*5} height={160-i*10} fill="#2a2a3a"/>
          {/* Windows */}
          {[0,1,2].map(row=>[0,1,2].map(col=>(
            <rect key={`${row}-${col}`} x={x+8+col*18} y={110+i*10+row*25}
              width="10" height="12" fill={Math.random()>0.5?"#aacc44":"#223"} opacity="0.8"/>
          )))}
        </g>
      ))}
      {/* Dark storm sky */}
      <rect x="0" y="0" width="800" height="120" fill="#0a0a1a" opacity="0.7"/>
      {/* Lightning */}
      <path d="M400,20 l-20,60 l15,0 l-25,80" stroke="#fff" strokeWidth="2" opacity="0.8"/>
    </svg>
  );
}

function ApocalypseScene() {
  return (
    <svg viewBox="0 0 800 400" className="scene-svg">
      <rect x="0" y="0" width="800" height="400" fill="#0a0000"/>
      {/* Nuclear flash */}
      <circle cx="400" cy="180" r="160" fill="#ff8800" opacity="0.15"/>
      <circle cx="400" cy="180" r="80" fill="#ffcc00" opacity="0.2"/>
      <circle cx="400" cy="180" r="30" fill="#ffffff" opacity="0.5"/>
      {/* Mushroom cloud shape */}
      <ellipse cx="400" cy="140" rx="120" ry="80" fill="#cc4400" opacity="0.5"/>
      <ellipse cx="400" cy="120" rx="150" ry="60" fill="#aa3300" opacity="0.4"/>
      <rect x="380" y="200" width="40" height="120" fill="#882200" opacity="0.6"/>
      <ellipse cx="400" cy="320" rx="60" ry="20" fill="#662200" opacity="0.5"/>
      {/* Scorched earth */}
      <rect x="0" y="330" width="800" height="70" fill="#1a0500"/>
      {/* Debris */}
      {Array.from({length:20}).map((_,i)=>(
        <rect key={i} x={Math.sin(i*73)*350+400} y={300+Math.cos(i*53)*30}
          width={5+i%8} height={3+i%5} fill="#333" opacity="0.7"
          transform={`rotate(${i*37},${Math.sin(i*73)*350+400},${300+Math.cos(i*53)*30})`}/>
      ))}
      {/* Static glitch lines */}
      {[80,160,240,320].map(y=>(
        <rect key={y} x="0" y={y} width="800" height="2" fill="#fff" opacity="0.03"/>
      ))}
    </svg>
  );
}

function LastScene() {
  return (
    <svg viewBox="0 0 800 400" className="scene-svg">
      <rect x="0" y="0" width="800" height="400" fill="#0a0a0a"/>
      {/* Desolate ground */}
      <rect x="0" y="300" width="800" height="100" fill="#1a1008"/>
      {/* Faint horizon glow */}
      <ellipse cx="400" cy="300" rx="300" ry="30" fill="#442200" opacity="0.3"/>
      {/* Lone figure */}
      <ellipse cx="400" cy="340" rx="15" ry="20" fill="#2a1a08"/>
      <ellipse cx="400" cy="308" rx="10" ry="14" fill="#2a1a08"/>
      {/* One hand raised */}
      <line x1="395" y1="325" x2="375" y2="305" stroke="#2a1a08" strokeWidth="5" strokeLinecap="round"/>
      <line x1="405" y1="325" x2="415" y2="340" stroke="#2a1a08" strokeWidth="5" strokeLinecap="round"/>
      {/* Golden disc in hand */}
      <circle cx="374" cy="303" r="10" fill="#c9922f" opacity="0.9"/>
      <circle cx="374" cy="303" r="7" fill="none" stroke="#ffd700" strokeWidth="1.5"/>
      {/* Stars — very few */}
      {[120,200,300,500,650,720].map((x,i)=>(
        <circle key={i} cx={x} cy={40+i*12} r="1" fill="#fff" opacity="0.4"/>
      ))}
      {/* Dust */}
      {Array.from({length:15}).map((_,i)=>(
        <ellipse key={i} cx={50+i*50} cy={320+Math.sin(i)*20} rx={8+i%5} ry="3"
          fill="#2a1a08" opacity="0.3"/>
      ))}
    </svg>
  );
}

function SilenceScene() {
  return (
    <svg viewBox="0 0 800 400" className="scene-svg">
      <rect x="0" y="0" width="800" height="400" fill="#000"/>
      {/* Dark Earth */}
      <circle cx="400" cy="200" r="140" fill="#0a0f0a" stroke="#1a1a1a" strokeWidth="2"/>
      {/* Very faint continent outlines */}
      <path d="M340,130 q30,-20 60,10 q20,30 0,60 q-30,20 -50,0 Z" fill="#0f1a0f" opacity="0.6"/>
      <path d="M420,200 q40,-10 50,30 q10,30 -20,40 q-30,10 -40,-20 Z" fill="#0f1a0f" opacity="0.5"/>
      {/* No light — just darkness */}
      <circle cx="400" cy="200" r="140" fill="none" stroke="#111" strokeWidth="1"/>
      {/* Flat signal lines — no signal */}
      {[80,100,120,140].map(y=>(
        <line key={y} x1="600" y1={y} x2="780" y2={y} stroke="#1a3a1a" strokeWidth="1" opacity="0.4"/>
      ))}
      <text x="690" y="170" textAnchor="middle" fill="#1a4a1a" fontSize="10" fontFamily="monospace" opacity="0.5">NO SIGNAL</text>
      {/* Sparse stars */}
      {Array.from({length:30}).map((_,i)=>(
        <circle key={i} cx={Math.sin(i*137.5)*380+400} cy={Math.cos(i*97.3)*180+200}
          r="0.8" fill="#fff" opacity="0.2"/>
      ))}
    </svg>
  );
}

function CloseScene() {
  return (
    <svg viewBox="0 0 800 400" className="scene-svg">
      {/* Space */}
      <rect x="0" y="0" width="800" height="400" fill="#050510"/>
      {Array.from({length:50}).map((_,i)=>(
        <circle key={i} cx={Math.sin(i*137.5)*360+400} cy={Math.cos(i*97.3)*180+200}
          r="1" fill="#fff" opacity={0.2+Math.random()*0.4}/>
      ))}
      {/* The golden disc */}
      <circle cx="300" cy="200" r="70" fill="none" stroke="#c9922f" strokeWidth="4"/>
      <circle cx="300" cy="200" r="60" fill="none" stroke="#ffd700" strokeWidth="1" opacity="0.5"/>
      <circle cx="300" cy="200" r="8" fill="#ffd700"/>
      <ellipse cx="300" cy="200" rx="90" ry="14" fill="none" stroke="#c9922f" strokeWidth="2" opacity="0.6"/>
      {/* Alien hand */}
      <ellipse cx="350" cy="250" rx="40" ry="20" fill="#1a2a3a" opacity="0.9"/>
      {[320,335,350,365,378].map((x,i)=>(
        <ellipse key={i} cx={x} cy={235-i*2} rx="8" ry="18" fill="#1a2a3a" opacity="0.9"/>
      ))}
      {/* Text on disc — engraved */}
      <text x="300" y="195" textAnchor="middle" fill="#c9922f" fontSize="8" fontFamily="monospace" opacity="0.7">EARTH</text>
      <text x="300" y="207" textAnchor="middle" fill="#c9922f" fontSize="6" fontFamily="monospace" opacity="0.5">SOL III</text>
    </svg>
  );
}

function EndScene() {
  return (
    <svg viewBox="0 0 800 400" className="scene-svg">
      <rect x="0" y="0" width="800" height="400" fill="#000"/>
      {/* Faint distant blue dot */}
      <circle cx="400" cy="200" r="6" fill="#4488cc" opacity="0.5"/>
      <circle cx="400" cy="200" r="10" fill="none" stroke="#4488cc" strokeWidth="1" opacity="0.2"/>
      {/* Many stars — full universe */}
      {Array.from({length:100}).map((_,i)=>(
        <circle key={i} cx={Math.sin(i*137.5)*380+400} cy={Math.cos(i*97.3)*190+200}
          r={Math.random()*1.5+0.3} fill="#fff" opacity={0.1+Math.random()*0.4}/>
      ))}
    </svg>
  );
}
