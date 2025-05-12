export function showHelp() {
    console.log(`
Usage:
  lomer-ui [command] [options]

Commands:
  add                  Chooose and add components
  add <component>      Add a specific component (e.g., Button)
  reset                Scan and reset components to the latest state
  --help               Display this help message

Examples:
  lomer-ui add
  lomer-ui add Button
  lomer-ui reset
`);
}
