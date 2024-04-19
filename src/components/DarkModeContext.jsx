import { createContext } from "react";

const DarkModeContext = createContext([null, () => {}]);
//  Dieser Standardwert [null, () => {}] wird verwendet, wenn kein passender Provider im Komponentenbaum gefunden wird. Wenn man [null, () => {}] oder irgendeinen anderen Wert angibt, fungiert dieser Wert als Standardwert für den Kontext. In diesem Fall, da der Kontext für den Dark-Light-Modus erstellt wird, ist der Standardwert nicht von großer Bedeutung, da man ihn sowieso überschreibt, wenn man den DarkModeProvider verwendet. Daher ist es egal, welchen Wert man dort angibt.

export default DarkModeContext;
