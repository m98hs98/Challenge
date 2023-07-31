import { useState } from "react";
import SwitchTheme from "./SwitchTheme";
import { Tabs, Link } from "react-daisyui";
import { FizzBuzz, APIRequest } from "./challenges";
import logo from "./iag.png";

const TABS = [
  {
    label: "1. FizzBuzz",
    component: <FizzBuzz />,
  },
  {
    label: "2. API Request",
    component: <APIRequest />,
  },
];

export const App = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="flex flex-col font-sans">
      <div className="navbar bg-base-300 shadow-xl px-8 mb-4">
        <div className="flex-1">
          <img src={logo} className="app-logo" alt="logo" />

          <Link className="link-white text-2xl tracking-wide">
            IAG React Coding Challenge
          </Link>
        </div>
        <div className="flex-none">
          <SwitchTheme />
        </div>
      </div>
      <div className="mx-8">
        <Tabs
          value={currentTab}
          onChange={setCurrentTab}
          variant="bordered"
          size="lg"
          className="tabs-border-bottom mb-4"
        >
          {TABS.map(({ label }, index) => (
            <Tabs.Tab key={index} value={index}>
              {label}
            </Tabs.Tab>
          ))}
        </Tabs>
        {TABS[currentTab].component}
      </div>
    </div>
  );
};
