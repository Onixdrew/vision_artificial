import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";


export default function NavbarAprendiz() {
  return (
    <Navbar isBordered className="bg-green-600 flex justify-around p-2 ">
      <NavbarBrand justify="start">
        <p className="font-bold text-inherit text-[2em]">Aprendiz</p>
      </NavbarBrand>

      <NavbarContent className="flex justify-evenly" >
        <NavbarItem >
          <Link href="#" className="text-black text-[1.5em]">
            inicio
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/objetos_aprendiz" className="text-black text-[1.5em]"  >
            Objetos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/historial" className="text-black text-[1.5em]">
            Historial
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger >
            <Avatar
              isBordered
              as="button"
              className="transition-transform ms-[40vw]"
              color="primary"
              name="Jason Hughes"
              size="lg"
              
              src="https://media.istockphoto.com/id/913062404/es/foto/cara-de-hombre-de-negocios-contra-el-fondo-blanco.jpg?s=612x612&w=0&k=20&c=KWNbHS35bjiMRjHFXg5FLCMNOpBI7rTEAfyds_3XQ-8="
            />
            
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
