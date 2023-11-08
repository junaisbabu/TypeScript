import React, { useState } from "react";

type Theme = "light" | "dark" | "system";

function Component1() {
  const [selectedTheme, setSelelctedTheme] = useState("light");
  const themeOptions = ["light", "dark", "system"];
  return (
    <>
      <Component2
        selectedTheme={selectedTheme}
        themeOptions={themeOptions}
        onThemeClick={(theme) => setSelelctedTheme(theme)}
      />
      <Component3
        selectedTheme={selectedTheme}
        themeOptions={themeOptions}
        onThemeClick={(theme) => setSelelctedTheme(theme)}
      />
      <Component4
        selectedTheme={selectedTheme}
        themeOptions={themeOptions}
        onThemeClick={(theme) => setSelelctedTheme(theme)}
      />
    </>
  );
}

// Example: 1
function Component2<T>({
  selectedTheme,
  themeOptions,
  onThemeClick,
}: {
  selectedTheme: T;
  themeOptions: T[];
  onThemeClick: (theme: T) => void;
}) {
  return (
    <>
      {themeOptions.map((theme) => {
        return <button>{theme as String}</button>; // theme should be ReactNode
      })}
    </>
  );
}

// Example: 2
type ThemeOptionsProps<T> = {
  selectedTheme: T;
  themeOptions: T[];
  onThemeClick: (theme: T) => void;
};

function Component3<T>({ selectedTheme, themeOptions }: ThemeOptionsProps<T>) {
  return (
    <>
      {themeOptions.map((theme) => {
        return <button>{theme as String}</button>; // theme should be ReactNode
      })}
    </>
  );
}

// Example: 3
function Component4<T extends React.ReactNode>({
  // -> using extends
  selectedTheme,
  themeOptions,
  onThemeClick,
}: {
  selectedTheme: T;
  themeOptions: T[];
  onThemeClick: (theme: T) => void;
}) {
  return (
    <>
      {themeOptions.map((theme) => {
        return <button>{theme}</button>; // No need to specify the type here
      })}
    </>
  );
}

export default Component1;
