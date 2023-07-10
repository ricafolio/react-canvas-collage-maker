import type { RootStateType } from "@/redux/store"
import { COLLAGE_TEMPLATES } from "@/constants/canvasConfig"
import { useAppSelector } from "@/redux/hooks"

function useCanvasData() {
  const canvas = useAppSelector(
    (state: RootStateType) => state.canvas.canvas
  )
  const selectedImageIndex = useAppSelector(
    (state: RootStateType) => state.selection.selectedImageIndex
  )
  const images = useAppSelector(
    (state: RootStateType) => state.selection.images
  )

  return { canvas, images, selectedImageIndex }
}

function useCanvasConfigData() {
  const activeTemplateIndex = useAppSelector(
    (state: RootStateType) => state.canvas.template
  )
  const activeRatioIndex = useAppSelector(
    (state: RootStateType) => state.canvas.ratio
  )
  return { activeTemplateIndex, activeRatioIndex }
}

function useCanvasImageData() {
  const uploadCount = useAppSelector(
    (state: RootStateType) => state.selection.images.length
  )
  const maxImageUploads = useAppSelector(
    (state: RootStateType) => COLLAGE_TEMPLATES[state.canvas.template].config
  ).length

  return { uploadCount, maxImageUploads }
}

function useTabData() {
  const activeTab = useAppSelector(
    (state: RootStateType) => state.canvas.tab
  )

  return { activeTab }
}

export { 
  useCanvasData,
  useCanvasConfigData,
  useCanvasImageData,
  useTabData
}
