import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

// t and r for left index finger
// no accidental cmd+q => quit!
export default createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-t"
               changePositionKey="ctrl-r"
               defaultIsVisible={false} >
    <LogMonitor />
  </DockMonitor>
)

console.log(`# Redux Dev Tools Loaded #
  - Show/Hide   the dock with "ctrl-t"
  - Re-position the dock with "ctrl-r"
`);
