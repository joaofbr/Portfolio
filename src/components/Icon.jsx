import {
  SiSharp,
  SiDotnet,
  SiBlazor,
  SiPython,
  SiFirebase,
  SiGit,
  SiGithub,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiCapacitor,
  SiClaude,
} from 'react-icons/si'
import { FaMicrosoft } from 'react-icons/fa6'
import {
  LuPlug,
  LuDatabase,
  LuGitBranch,
  LuPalette,
  LuCloud,
  LuWorkflow,
  LuKanban,
  LuCode,
} from 'react-icons/lu'

const ICONS = {
  csharp: SiSharp,
  dotnet: SiDotnet,
  blazor: SiBlazor,
  python: SiPython,
  firebase: SiFirebase,
  git: SiGit,
  github: SiGithub,
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  capacitor: SiCapacitor,
  ai: SiClaude,
  azure: FaMicrosoft,
  devops: LuGitBranch,
  api: LuPlug,
  cloud: LuCloud,
  database: LuDatabase,
  ui: LuPalette,
  workflow: LuWorkflow,
  kanban: LuKanban,
}

export default function Icon({ name, ...props }) {
  const Component = ICONS[name] ?? LuCode
  return <Component aria-hidden="true" {...props} />
}
