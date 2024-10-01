import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import { FaSun, FaMoon } from "react-icons/fa6";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <Button className="text-yellow-500" onClick={() => setTheme('light')} isIconOnly variant="light" aria-label="Light mode" title="Light mode">
        <FaSun className="w-5 h-5" />
      </Button>
      <Button className="text-purple-500" onClick={() => setTheme('dark')} isIconOnly variant="light" aria-label="Dark mode" title="Dark mode">
        <FaMoon className="w-5 h-5" />
      </Button>
    </div>
  )
};