"use client";


import { decrement, increment } from '@redux/features/counter/counterSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


function Counter() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
  return (
    <div>
        <h3 className="text-center py-3 text-xl">Count is : {count}</h3>
        <div className="flex justify-center gap-3">
            <button onClick={() => dispatch(increment())} className="py-3 px-6 bg-slate-400 rounded-sm hover:bg-slate-600 hover:text-gray-200">Increase Count</button>
            <button onClick={() => dispatch(decrement())} className="py-3 px-6 bg-slate-400 rounded-sm hover:bg-slate-600 hover:text-gray-200">Decrease Count</button>
        </div>
    </div>
  )
}

export default Counter