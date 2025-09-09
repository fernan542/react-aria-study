import clsx from "clsx";
import { ReactNode, Ref, useLayoutEffect, useRef, useState } from "react";
import { BreadcrumbHandleData } from "./breadcrumbs/useBreadcrumbs";

const handle = {
  breadcrumb: {
    label: "Tabs",
    to: "/components/tabs",
  },
} satisfies BreadcrumbHandleData;

interface TabData {
  readonly label: string;
  readonly description: ReactNode;
}

const tabs: readonly TabData[] = [
  {
    label: "Maria Ahlefeldt",
    description: (
      <p>
        <a href="https://en.wikipedia.org/wiki/Maria_Theresia_Ahlefeldt">
          Maria Theresia Ahlefeldt
        </a>
        (16 January 1755 – 20 December 1810) was a Danish, (originally German),
        composer. She is known as the first female composer in Denmark. Maria
        Theresia composed music for several ballets, operas, and plays of the
        royal theatre. She was given good critic as a composer and described as
        a “<span lang="da">virkelig Tonekunstnerinde</span>” ('a True Artist of
        Music').
      </p>
    ),
  },
  {
    label: "Carl Andersen",
    description: (
      <p>
        <a href="https://en.wikipedia.org/wiki/Joachim_Andersen_(composer)">
          Carl Joachim Andersen
        </a>
        (29 April 1847 – 7 May 1909) was a Danish flutist, conductor and
        composer born in Copenhagen, son of the flutist Christian Joachim
        Andersen. Both as a virtuoso and as composer of flute music, he is
        considered one of the best of his time. He was considered to be a tough
        leader and teacher and demanded as such a lot from his orchestras but
        through that style he reached a high level.
      </p>
    ),
  },
  {
    label: "Ida da Fonseca",
    description: (
      <p>
        <a href="https://en.wikipedia.org/wiki/Ida_Henriette_da_Fonseca">
          Ida Henriette da Fonseca
        </a>
        (July 27, 1802 – July 6, 1858) was a Danish opera singer and composer.
        Ida Henriette da Fonseca was the daughter of Abraham da Fonseca
        (1776–1849) and Marie Sofie Kiærskou (1784–1863). She and her sister
        Emilie da Fonseca were students of Giuseppe Siboni, choir master of the
        Opera in Copenhagen. She was given a place at the royal Opera alongside
        her sister the same year she debuted in 1827.
      </p>
    ),
  },
  {
    label: "Peter Müller",
    description: (
      <p>
        <a href="https://en.wikipedia.org/wiki/Peter_Lange-M%C3%BCller">
          Peter Erasmus Lange-Müller
        </a>
        (1 December 1850 – 26 February 1926) was a Danish composer and pianist.
        His compositional style was influenced by Danish folk music and by the
        work of Robert Schumann; Johannes Brahms; and his Danish countrymen,
        including J.P.E. Hartmann.
      </p>
    ),
  },
];

export const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].label);

  const tabNodes = useRef<(HTMLButtonElement | null)[]>([]);
  const firstTabNode = useRef<HTMLButtonElement | null>(null);
  const lastTabNode = useRef<HTMLButtonElement | null>(null);

  useLayoutEffect(() => {
    tabNodes.current.forEach((tab, index) => {
      if (tab) {
        if (index === 0) firstTabNode.current = tab;
        lastTabNode.current = tab;
        tab.tabIndex = -1;
      }
    });

    if (firstTabNode.current) {
      handleOnSelectionChanged(tabs[0].label, firstTabNode.current);
    }
  }, []);

  function handleOnSelectionChanged(tab: string, node: HTMLButtonElement) {
    setSelectedTab(tab);

    // Resets all tabIndex value of other tabs to -1 and sets the
    // current selected tab to 0.
    for (const t of tabNodes.current) {
      if (t === null) continue;
      if (t.id == node.id) {
        t!.tabIndex = 0;
      } else {
        t!.tabIndex = -1;
      }
    }
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    const tgt = event.currentTarget;
    const key = event.key;
    let flag = false;

    switch (key) {
      case "ArrowLeft":
        moveFocusToPreviousTab(tgt);
        flag = true;
        break;
      case "ArrowRight":
        moveFocusToNextTab(tgt);
        flag = true;
        break;
      case "Home":
        moveFocusToFirstTab();
        flag = true;
        break;
      case "End":
        moveFocusToLastTab();
        flag = true;
        break;
      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  function moveFocusToFirstTab() {
    if (firstTabNode.current) {
      moveFocusToTab(firstTabNode.current);
    }
  }

  function moveFocusToLastTab() {
    if (lastTabNode.current) {
      moveFocusToTab(lastTabNode.current);
    }
  }

  function moveFocusToNextTab(tab: HTMLButtonElement) {
    let newTab: HTMLButtonElement;

    if (tab == lastTabNode.current) {
      newTab = lastTabNode.current;
    } else {
      const index = tabNodes.current.indexOf(tab);
      newTab = tabNodes.current[index + 1]!;
    }

    moveFocusToTab(newTab);
  }

  function moveFocusToPreviousTab(tab: HTMLButtonElement) {
    let newTab: HTMLButtonElement;

    if (tab == firstTabNode.current) {
      newTab = firstTabNode.current!;
    } else {
      const index = tabNodes.current.indexOf(tab);
      newTab = tabNodes.current[index - 1]!;
    }

    moveFocusToTab(newTab);
  }

  function moveFocusToTab(tab: HTMLButtonElement) {
    tab.focus();
  }

  return (
    <>
      <div>
        <h3 id="tablist-1">Danish Composers</h3>
        <div role="tablist" aria-labelledby="tablist-1">
          {tabs.map((tab, index) => {
            return (
              <TabButton
                key={tab.label}
                label={tab.label}
                buttonRef={(el) => (tabNodes.current[index] = el)}
                selected={selectedTab === tab.label}
                onClick={(t, e) => handleOnSelectionChanged(t, e.currentTarget)}
                onKeyDown={onKeyDown}
              />
            );
          })}
        </div>

        {tabs.map((tab) => (
          <TabPanel
            key={tab.label}
            tab={tab.label}
            visible={selectedTab === tab.label}
          >
            {tab.description}
          </TabPanel>
        ))}
      </div>
    </>
  );
};

interface TabButtonProps {
  label: string;
  buttonRef: Ref<HTMLButtonElement>;
  selected: boolean;
  onClick: (
    tab: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

const TabButton = ({
  label,
  buttonRef,
  selected,
  onClick,
  onKeyDown,
}: TabButtonProps) => {
  return (
    <button
      id={`tab-${label}`}
      ref={buttonRef}
      role="tab"
      aria-selected={selected}
      aria-controls={`tabpanel-${label}`}
      className={clsx(
        "inline-block relative m-0 p-2",
        "bg-blue-100 outline-none rounded-sm",
        "focus:border focus:border-blue-500",
        "hover:border hover:border-blue-500",
        "aria-selected:border-t-4 aria-selected:border-blue-500",
        "aria-[selected=false]:border-b-2 aria-[selected=false]:border-b-white"
      )}
      onClick={(e) => onClick(label, e)}
      onKeyDown={onKeyDown}
    >
      <span className={clsx("p-1 rounded-sm")}>{label}</span>
    </button>
  );
};

interface TabPanelProps {
  children: ReactNode;
  tab: string;
  visible: boolean;
}

const TabPanel = ({ children, tab, visible }: TabPanelProps) => {
  return (
    <div
      id={`tabpanel-${tab}`}
      aria-labelledby={`tab-${tab}`}
      role="tabpanel"
      className={clsx("p-1", { hidden: !visible })}
    >
      {children}
    </div>
  );
};

Tabs.handle = handle;
