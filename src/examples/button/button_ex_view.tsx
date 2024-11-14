import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import clsx from 'clsx';
import { useState } from 'react';

export const ButtonExView = () => {
    const [isToggled, setIsToggled] = useState(false)

    function print() {
        window.print();
    }

    function onPrintButtonKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
        const key = event.key;
        let flag = false;

        switch (key) {
            case " ":
            case "Enter":
                print();
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

    function toggle() {
        setIsToggled(!isToggled)
    }

    function onToggleButtonKeyDown(event: React.KeyboardEvent<HTMLAnchorElement>) {
        const key = event.key;
        let flag = false;

        switch (key) {
            case " ":
            case "Enter":
                toggle();
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

    return (
        <>
            <p>This <q>Print</q> action button uses a <code>div</code> element.</p>
            <div tabIndex={0}
                id="action"
                role='button'
                onClick={() => print()}
                onKeyDown={onPrintButtonKeyDown}
                className={clsx(
                    'bg-blue-500 text-white p-2',
                    'inline-block relative',
                    'border-[1px] rounded-md',
                    'shadow-sm shadow-gray-400',
                    'outline-none',
                    'focus:outline-2 focus:outline-gray-600',
                    'hover:border-emerald-950 hover:bg-blue-600'
                )}
            >
                Print Page
            </div>

            <p>This <q>Mute</q> toggle button uses an <code>a</code> element.</p>
            <a
                id="toggle"
                tabIndex={0}
                aria-pressed={isToggled}
                onKeyDown={onToggleButtonKeyDown}
                onClick={toggle}
                className={clsx(
                    !isToggled ?
                        `bg-purple-500 text-white px-2 py-2
                    inline-block relative
                    border-[1px] rounded-md
                    shadow-sm shadow-gray-400
                    outline-none
                    focus:outline-2 focus:outline-gray-600
                    hover:border-emerald-950 hover:bg-purple-600` :
                        `bg-purple-800 text-white px-2 py-2
                    inline-block relative
                    border-[1px] border-[hsl(261,71%,49%)] rounded-md
                    shadow-[0_3px_5px_1px_hsl(261,82%,30%)]
                    outline-none
                    focus:outline-2 focus:outline-gray-600
                    hover:border-emerald-950 hover:bg-purple-900`,
                )}
            >
                Mute {' '}
                {isToggled
                    ? <VolumeOffIcon
                        focusable={false}
                        aria-hidden={true}
                    /> :
                    <VolumeUpIcon
                        focusable={false}
                        aria-hidden={true}
                    />
                }
            </a>
            <p>The <q>Disabled</q> button at the left uses an <code>aria-disabled</code> state.</p>
            <p>The <q>Disabled</q> button at the right uses a <code>disabled</code> button attribute.</p>
            <div>
                <button
                    aria-disabled={true}
                    className={clsx(
                        'p-2 m-1 inline-block relative',
                        'border-[1px] rounded-md',
                        'shadow-sm shadow-gray-400',
                        'aria-disabled:bg-gray-200',
                    )}
                >
                    Disabled (aria)
                </button>
                <button
                    disabled={true}
                    aria-disabled={true}
                    className={clsx(
                        'p-2 m-1 inline-block relative',
                        'border-[1px] rounded-md',
                        'shadow-sm shadow-gray-400',
                        'aria-disabled:bg-gray-200',
                    )}
                >
                    Disabled (html attribute)
                </button>
            </div>
        </>
    )
}