"use client";

import React, { useEffect, useRef, useState } from "react";

const Counter = ({ value, id }: { value: number; id: number }) => {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef(null);

  useEffect(() => {
    const Ref = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 1 }
    );

    if (Ref) {
      observer.observe(Ref);
    }

    return () => {
      if (Ref) {
        observer.unobserve(Ref);
      }
    };
  }, [ref]);

  useEffect(() => {
    let timeout:any;
    if (isVisible) {
      if (id === 1)
        timeout = setTimeout(() => {
          if (count < value) {
            setCount(count + 1);
          } else if (count < value) {
            setCount(count + 1);
          } else if (count < value) {
            setCount(count + 10);
          } else if (count === value) {
            clearInterval(timeout);
          }
        }, 9.75);
      if (id === 2)
        timeout = setTimeout(() => {
          if (count < value) {
            setCount(count + 1);
          } else if (count < value) {
            setCount(count + 1);
          } else if (count < value) {
            setCount(count + 10);
          } else if (count === value) {
            clearInterval(timeout);
          }
        }, 187.5);
      if (id === 3)
        timeout = setTimeout(() => {
          if (count < value) {
            setCount(count + 1);
          } else if (count < value) {
            setCount(count + 1);
          } else if (count < value) {
            setCount(count + 10);
          } else if (count === value) {
            clearInterval(timeout);
          }
        }, 150);
      if (id === 4)
        timeout = setTimeout(() => {
          if (count < value) {
            setCount(count + 1);
          } else if (count < value) {
            setCount(count + 1);
          } else if (count < value) {
            setCount(count + 10);
          } else if (count === value) {
            clearInterval(timeout);
          }
        }, 250);
    }

    return () => clearInterval(timeout);
  }, [isVisible, count, value]);

  return (
    <div ref={ref}>
      {isVisible && (
        <div className="text-[30px] font-bold text-center lg:mt-0 lg:text-start mt-1">
          {count
            .toLocaleString()
            .toString()
            ?.replace(/\d/g, (d:any) => "۰۱۲۳۴۵۶۷۸۹"[d])}
          +
        </div>
      )}
    </div>
  );
};

export default Counter;
