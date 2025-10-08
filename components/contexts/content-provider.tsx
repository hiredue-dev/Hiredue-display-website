"use client";
import React, { createContext, useContext, ReactNode } from "react";
import * as constants from "@/config/constant";

type ContentContextType = typeof constants;

const ContentContext = createContext<ContentContextType>(constants);


export const ContentProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ContentContext.Provider value={constants}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
