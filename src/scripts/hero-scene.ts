import {
  BoxGeometry,
  EdgesGeometry,
  Group,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  OrthographicCamera,
  Scene,
  WebGLRenderer,
} from "three";

const INK = 0x101318;
const COBALT = 0x1d4ed8;

/** Mounts a slow-turning stack of nine thin plates. Returns false when WebGL is unavailable. */
export function mountHeroScene(host: HTMLElement): boolean {
  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({ antialias: true, alpha: true });
  } catch {
    return false;
  }

  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 100);
  camera.position.set(6, 5, 6);
  camera.lookAt(0, 0, 0);

  const stack = new Group();
  const plate = new BoxGeometry(3, 0.06, 2.2);
  const edges = new EdgesGeometry(plate);

  for (let i = 0; i < 9; i++) {
    const active = i === 4;
    const mesh = new Mesh(
      plate,
      new MeshBasicMaterial({ color: active ? COBALT : 0xffffff, transparent: true, opacity: active ? 0.95 : 0.88 }),
    );
    const outline = new LineSegments(edges, new LineBasicMaterial({ color: active ? COBALT : INK }));
    const layer = new Group();
    layer.add(mesh, outline);
    layer.position.y = (i - 4) * 0.36;
    layer.userData.phase = i * 0.55;
    stack.add(layer);
  }
  scene.add(stack);

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = host;
    if (!w || !h) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h, false);
    const aspect = w / h;
    const size = 2.6;
    camera.left = -size * aspect;
    camera.right = size * aspect;
    camera.top = size;
    camera.bottom = -size;
    camera.updateProjectionMatrix();
  };

  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  renderer.domElement.setAttribute("aria-hidden", "true");
  host.appendChild(renderer.domElement);
  resize();
  new ResizeObserver(resize).observe(host);

  let visible = true;
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
  }).observe(host);

  const tick = (t: number) => {
    if (visible && !document.hidden) {
      const s = t / 1000;
      stack.rotation.y = s * 0.18;
      stack.children.forEach((layer) => {
        layer.position.x = Math.sin(s * 0.8 + layer.userData.phase) * 0.12;
      });
      renderer.render(scene, camera);
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
  return true;
}
