"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  // MobileNavToggle,
} from "../utils/Resizable-Navbar";
import { Box, Button, Text } from "@mantine/core";
// import React, { useState } from "react";

export function NavbarDemo() {


  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  

  return (
      <Navbar className="inset-x-0 top-0 z-1">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            {/* <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            /> */}
          </MobileNavHeader>

        </MobileNav>
      </Navbar>

  );
}

export default NavbarDemo;