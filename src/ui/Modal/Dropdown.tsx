"use client";

import React, { ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useAppContext } from "@/context/AppContext";

interface DropdownProps {
  id: string;
  label: string;
  children: React.ReactNode;
  isSelect: boolean;
  icon?: ReactElement;
  classNameDrop: string;
  classNameButton?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ 
  id, 
  label, 
  children, 
  isSelect, 
  icon,
  classNameDrop,
  classNameButton
}) => {
  const { activeDropdown, toggleDropdown } = useAppContext();
  const isOpen = activeDropdown === id;

  return (
    <div className="md:relative mb-1">
      <button
        onClick={() => toggleDropdown(id)}
        className="flex items-center gap-2 text-extraDarkBrand font-semibold text-base hover:text-brand transition cursor-pointer"
      >
        <span className={`${classNameButton}`}>
          {icon ? icon : label}
        </span>
        {isSelect && (<ChevronDownIcon className={`size-5 ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-150`} />)}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.2 }}
            className={`absolute bg-white shadow-xl border-2 border-extraLightGray md:rounded-lg z-50 origin-top md:mt-2 max-h-screen overflow-y-auto ${classNameDrop}`}
          >
            {children}
          </motion.div>
          
        )}
      </AnimatePresence>
    </div>
  );
};