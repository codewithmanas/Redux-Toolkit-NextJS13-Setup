import React from 'react'

function Counter() {
  return (
    <div>
        <h3 className="text-center py-3 text-xl">Count is : 0</h3>
        <div className="flex justify-center gap-3">
            <button className="py-3 px-6 bg-slate-400 rounded-sm hover:bg-slate-600 hover:text-gray-200">Increase Count</button>
            <button className="py-3 px-6 bg-slate-400 rounded-sm hover:bg-slate-600 hover:text-gray-200">Decrease Count</button>
        </div>
    </div>
  )
}

export default Counter