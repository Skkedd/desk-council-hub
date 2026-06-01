import tarsPortrait from "../assets/council-members/tars/TARS.png";
import cubieAlphaPortrait from "../assets/council-members/cubie-alpha/Cubie_A.png";
import cubieBetaPortrait from "../assets/council-members/cubie-beta/Cubie_B.png";
import clawStagePortrait from "../assets/council-members/claw-stage/Claw_Stage.png";
import umiOrtomiPortrait from "../assets/council-members/umi-ortomi/Umi_and_Ortomi.png";

export const councilMembers = [
  {
    id: "tars",
    name: "TARS",
    portrait: tarsPortrait,
    status: "Online",
    activity: "Standing by",
    thought: "This appears marginally under control.",
    favoriteQuote: "Someone should really be supervising this.",
    joinDate: "May 2026",
  },
  {
    id: "cubie-alpha",
    name: "Cubie α",
    portrait: cubieAlphaPortrait,
    status: "Awaiting Arrival",
    activity: "Pending activation",
    thought: "Signal not detected.",
    favoriteQuote: "Not yet recorded.",
    joinDate: "NOT ARRIVED",
  },
  {
    id: "cubie-beta",
    name: "Cubie β",
    portrait: cubieBetaPortrait,
    status: "Awaiting Arrival",
    activity: "Pending activation",
    thought: "Signal not detected.",
    favoriteQuote: "Not yet recorded.",
    joinDate: "NOT ARRIVED",
  },
  {
    id: "claw-stage",
    name: "Claw Stage",
    portrait: clawStagePortrait,
    status: "Awaiting Arrival",
    activity: "Deployment pending",
    thought: "Signal not detected.",
    favoriteQuote: "Not yet recorded.",
    joinDate: "NOT ARRIVED",
  },
  {
    id: "umi-ortomi",
    name: "Umi & Ortomi",
    portrait: umiOrtomiPortrait,
    status: "Not Quite As Smart, But They Try",
    activity: "Beeping, blinking and contributing morale",
    thought: "UMI: Beep. Ortomi: *blink*",
    favoriteQuote: "UMI: Beep. Ortomi: *blink*",
    joinDate: "Present",
  },
];