import {

  CookieIcon
} from '@radix-ui/react-icons'

import CustomTheme from './CustomTheme'

import { Button, Drawer, DrawerTrigger, DrawerContent, Popover, PopoverTrigger, PopoverContent } from '@/components/ui'

const CustomDrawer = () => {
  return (
    <div>
      <div
        className="hidden items-center md:flex"
      >
        <Popover>
          <PopoverTrigger
            asChild
          >
            <Button
              size="sm"
              variant="ghost"
            >
              <CookieIcon />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            align="start"
            className="z-40 w-[340px] rounded-[12px] bg-white p-6 dark:bg-zinc-950"
          >
            <CustomTheme />
          </PopoverContent>
        </Popover>
      </div>

      <Drawer>
        <DrawerTrigger
          asChild
        >
          <Button
            className="md:hidden"
            size="sm"
            variant="ghost"
          >
            <CookieIcon />
          </Button>
        </DrawerTrigger>

        <DrawerContent
          className="p-6 pt-0"
        >
          <CustomTheme />
        </DrawerContent>
      </Drawer>
    </div>

  )
}

export default CustomDrawer
