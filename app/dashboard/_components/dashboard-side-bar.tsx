"use client"

import { Separator } from '@/components/ui/separator'
import clsx from 'clsx'
import {
  Activity,
  BriefcaseMedical,
  FileText,
  Gauge,
  HomeIcon,
  Settings,
  ChevronDown
} from "lucide-react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaTasks } from 'react-icons/fa'
import { useState } from 'react'

export default function DashboardSideBar() {
  const pathname = usePathname();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="lg:block hidden border-r h-full">
      <div className="flex h-full max-h-screen flex-col gap-2 ">
        <div className="flex h-[55px] items-center justify-between border-b px-3 w-full">
          <Link className="flex items-center gap-2 font-semibold ml-1" href="/">
            <Activity className="h-3 w-3" />
            <span className="">Data Pulse Dashboard</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2 ">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50", {
                "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50": pathname === "/dashboard"
              })}
              href="/dashboard"
            >
              <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white">
                <HomeIcon className="h-3 w-3" />
              </div>
              Home
            </Link>
            <Link
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50", {
                "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50": pathname === "/dashboard/projects"
              })}
              href="/dashboard/projects"
            >
              <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white">
                <Gauge className="h-3 w-3" />
              </div>
              Assessments
            </Link>
            <Link
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50", {
                "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50": pathname === "/dashboard/finance"
              })}
              href="/dashboard/finance"
            >
              <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white">
                <FileText className="h-3 w-3" />
              </div>
              Reports
            </Link>
            <Link
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50", {
                "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50": pathname === "/dashboard/projects"
              })}
              href="/dashboard/recommendations"
            >
              <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white">
                <BriefcaseMedical className="h-3 w-3" />
              </div>
              Recommendations
            </Link>

            <Separator className="my-3" />
            <div>
              <div
                className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 cursor-pointer", {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": isSettingsOpen || pathname.startsWith("/dashboard/settings")
                })}
                onClick={toggleSettings}
              >
                <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white">
                  <Settings className="h-3 w-3" />
                </div>
                <span>Settings</span>
                <ChevronDown className={`h-4 w-4 ml-auto transition-transform ${isSettingsOpen ? 'transform rotate-180' : ''}`} />
              </div>
              {isSettingsOpen && (
                <div className="ml-6 mt-2 space-y-2">
                  <Link
                    href="/dashboard/settings/profile"
                    className={clsx("block px-3 py-1 rounded-lg text-sm", {
                      "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/dashboard/settings/company-profile"
                    })}
                  >
                    Company Profile
                  </Link>
                  <Link
                    href="/dashboard/settings/account"
                    className={clsx("block px-3 py-1 rounded-lg text-sm", {
                      "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/dashboard/settings/team-management"
                    })}
                  >
                    Team Management
                  </Link>
                  <Link
                    href="/dashboard/settings/notifications"
                    className={clsx("block px-3 py-1 rounded-lg text-sm", {
                      "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/dashboard/settings/assessments-factory"
                    })}
                  >
                    Assessments Factory
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
