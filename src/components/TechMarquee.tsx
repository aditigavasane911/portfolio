import React from "react";

import { TextReveal } from "@/components/TextReveal";
import {
  AndroidStudioLogo,
  AntigravityLogo,
  CLogo,
  DartLogo,
  DockerLogo,
  ExpressLogo,
  FastAPILogo,
  FigmaLogo,
  FirebaseLogo,
  FlutterLogo,
  GitHubLogo,
  GitLogo,
  IntelliJLogo,
  JavaLogo,
  JavaScriptLogo,
  LinuxLogo,
  MySQLLogo,
  N8nLogo,
  NextLogo,
  NodeLogo,
  OpenCVLogo,
  PostgreSQLLogo,
  PostmanLogo,
  PythonLogo,
  PyTorchLogo,
  ReactLogo,
  ReplitLogo,
  SocketIOLogo,
  SupabaseLogo,
  TensorFlowLogo,
  TypeScriptLogo,
  VSCodeLogo,
  WindowsLogo,
  XAMPPLogo,
} from "@/components/TechLogos";
import "./TechMarquee.css";

interface MarqueeItem {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const toolsList: MarqueeItem[] = [
  { name: "VS Code", Icon: VSCodeLogo },
  { name: "Antigravity", Icon: AntigravityLogo },
  { name: "IntelliJ IDEA", Icon: IntelliJLogo },
  { name: "Android Studio", Icon: AndroidStudioLogo },
  { name: "GitHub", Icon: GitHubLogo },
  { name: "Git", Icon: GitLogo },
  { name: "Postman", Icon: PostmanLogo },
  { name: "Figma", Icon: FigmaLogo },
  { name: "n8n", Icon: N8nLogo },
  { name: "Replit", Icon: ReplitLogo },
  { name: "Docker", Icon: DockerLogo },
  { name: "XAMPP", Icon: XAMPPLogo },
  { name: "Windows", Icon: WindowsLogo },
  { name: "Linux", Icon: LinuxLogo },
  { name: "Firebase", Icon: FirebaseLogo },
];

const techList: MarqueeItem[] = [
  { name: "Java", Icon: JavaLogo },
  { name: "Python", Icon: PythonLogo },
  { name: "C", Icon: CLogo },
  { name: "JavaScript", Icon: JavaScriptLogo },
  { name: "TypeScript", Icon: TypeScriptLogo },
  { name: "React", Icon: ReactLogo },
  { name: "Next.js", Icon: NextLogo },
  { name: "Node.js", Icon: NodeLogo },
  { name: "Express.js", Icon: ExpressLogo },
  { name: "Flutter", Icon: FlutterLogo },
  { name: "Dart", Icon: DartLogo },
  { name: "FastAPI", Icon: FastAPILogo },
  { name: "MySQL", Icon: MySQLLogo },
  { name: "PostgreSQL", Icon: PostgreSQLLogo },
  { name: "Firebase", Icon: FirebaseLogo },
  { name: "Supabase", Icon: SupabaseLogo },
  { name: "PyTorch", Icon: PyTorchLogo },
  { name: "TensorFlow", Icon: TensorFlowLogo },
  { name: "OpenCV", Icon: OpenCVLogo },
  { name: "Socket.IO", Icon: SocketIOLogo },
];

function MarqueeRow({
  items,
  direction,
}: {
  items: MarqueeItem[];
  direction: "left" | "right";
}) {
  const directionClass = direction === "left" ? "tech-marquee-left" : "tech-marquee-right";

  return (
    <div className="tech-marquee-row">
      <div className={`tech-marquee-track ${directionClass}`}>
        {/* Sequence 1 */}
        <div className="tech-marquee-group">
          {items.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div key={`${item.name}-1-${idx}`} className="tech-marquee-item">
                <span className="tech-marquee-icon-wrap" aria-hidden="true">
                  <Icon className="w-5 h-5 object-contain" />
                </span>
                <span className="tech-marquee-name">{item.name}</span>
              </div>
            );
          })}
        </div>

        {/* Sequence 2 (Identical duplicate for seamless continuous loop) */}
        <div className="tech-marquee-group" aria-hidden="true">
          {items.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div key={`${item.name}-2-${idx}`} className="tech-marquee-item">
                <span className="tech-marquee-icon-wrap" aria-hidden="true">
                  <Icon className="w-5 h-5 object-contain" />
                </span>
                <span className="tech-marquee-name">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <section id="skills" className="tech-marquee-section" aria-label="Tools and Technologies">
      <div className="tech-marquee-wrapper">
        {/* ROW 1: TOOLS I USE */}
        <div className="tech-marquee-block">
          <TextReveal as="h3" delay={0} className="tech-marquee-title">
            TOOLS I USE
          </TextReveal>
          <MarqueeRow items={toolsList} direction="left" />
        </div>

        {/* ROW 2: TECHNOLOGIES I USE */}
        <div className="tech-marquee-block">
          <TextReveal as="h3" delay={60} className="tech-marquee-title">
            TECHNOLOGIES I USE
          </TextReveal>
          <MarqueeRow items={techList} direction="right" />
        </div>
      </div>
    </section>
  );
}
