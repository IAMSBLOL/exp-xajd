import { atom } from 'jotai'
import { useImmerAtom } from 'jotai-immer'

const menuStateAtom = atom({ drawerMenuOpen: false })

export const useMenuState = () => {
  const [menuState, setMenuState] = useImmerAtom(menuStateAtom)

  return {
    menuState,
    setMenuState
  }
}
