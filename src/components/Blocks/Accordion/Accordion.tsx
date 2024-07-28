import { useContext } from "react";
import styles from "./AccordionSummary.module.css";

import { classNames } from "@telegram-apps/telegram-ui/dist/helpers/classNames.js";
import { callMultiple } from "@telegram-apps/telegram-ui/dist/helpers/function";

import { Icon24ChevronDown } from "@telegram-apps/telegram-ui/dist/icons/24/chevron_down";

import { AccordionContext } from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/AccordionContext";
import { Cell, CellProps } from "@telegram-apps/telegram-ui/dist/components/Blocks/Cell/Cell";

export interface AccordionSummaryProps extends CellProps {}

/**
 * This component serves as a container for an accordion item, comprising a summary and
 * content sections. It uses the Context API to manage its state and to allow its children
 * (`Accordion.Summary` and `Accordion.Content`) to access shared state and callbacks.
 */
export const AccordionSummary = ({
  after,
  before,
  onClick,
  children,
  ...restProps
}: AccordionSummaryProps) => {
  const { expanded, labelId, contentId, onChange } =
    useContext(AccordionContext);
  const toggle = () => onChange(!expanded);

  return (
    <Cell
      id={labelId}
      aria-expanded={expanded}
      aria-controls={contentId}
      onClick={callMultiple(toggle, onClick)}
      after={
        after || (
          <Icon24ChevronDown
            className={classNames(
              styles.chevron,
              expanded && styles["chevron--expanded"]
            )}
          />
        )
      }
      before={
        before || (
          <Icon24ChevronDown
            className={classNames(
              styles.chevron,
              expanded && styles["chevron--expanded"]
            )}
          />
        )
      }
      {...restProps}
    >
      {children}
    </Cell>
  );
};
