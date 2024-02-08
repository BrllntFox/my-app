import { create } from "zustand"

type PreviewStore = {
    inViewPreview: string | null;
    setInViewPreview: (previw: string | null) => void;
    imgUrl: string;
    setImgUrl: (url: string) => void;
    imgH: number;
    setImgH: (imgH: number) => void;
    imgW: number;
    setImgW: (imgW: number) => void
}

export const usePreviewStore = create<PreviewStore>((set) => (
    {
        inViewPreview: null,
        setInViewPreview: (previw: string | null) => set({ inViewPreview: previw }),
        imgUrl: "",
        setImgUrl: (url: string) => set({ imgUrl: url }),
        imgH: 0,
        imgW: 0,
        setImgH: (imgh: number) => set({ imgH: imgh }),
        setImgW: (imgw: number) => set({ imgW: imgw })
    }
))