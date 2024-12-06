export interface GlobalState {
  isModalOpen: boolean;
  toggleModal: () => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  exitMenu: () => void;
  exitModal: () => void;
}

export interface ExploreData {
  hl: string;
  desc: string;
  img: string;
}