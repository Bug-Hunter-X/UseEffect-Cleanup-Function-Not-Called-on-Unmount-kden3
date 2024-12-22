# React useEffect Cleanup Function Issue

This repository demonstrates a subtle bug related to the cleanup function in React's `useEffect` hook. The issue arises when a component unmounts prematurely, preventing the cleanup function from executing as intended.

## Problem

The `MyComponent` uses `useEffect` to log messages on render and unmount.  However, if the parent component re-renders rapidly or unexpectedly, the cleanup function might not be triggered, potentially leading to memory leaks or unexpected behavior.

## Solution

The solution involves carefully managing the effect's dependencies array and ensuring that the component's lifecycle is correctly handled.