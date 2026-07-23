import { IDefaultSettings } from "../../types/types"

interface BetterStylesProps<T> {
    data: T,
    className?: string
    defaultStyle: IDefaultSettings,
    setDefaultStyle: <T>(type: keyof IDefaultSettings, value: T) => void; 
}

export function BetterStylesButton <T>({}: BetterStylesProps) {
    return (
                {WEIGHTS.map((item, idx) => (
                  <button
                    key={idx}
                    className={clsx(
                      item === defaultStyles.weights && "bg-line-primary",
                      "border-line-secondary border-2 px-2 py-1",
                    )}
                    onClick={() => setDefaultStyle<Weights>("weights", item)}
                  >
                    {item}
                  </button>
                ))}
    )
}