export default function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const paths = {
  wrench: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  extractor: (
    <>
      <path d="M12 20V6" />
      <path d="M7 11l5-5 5 5" />
      <path d="M8 20h8" />
    </>
  ),
  plug: (
    <>
      <path d="M9 3v4M15 3v4" />
      <path d="M7 7h10v3a5 5 0 0 1-10 0V7z" />
      <path d="M12 15v6" />
    </>
  ),
  nut: (
    <>
      <path d="M8 8.2 12 6l4 2.2v4.6L12 15.2 8 13V8.2z" />
      <circle cx="12" cy="10.6" r="1.35" />
    </>
  ),
  screw: (
    <>
      <circle cx="12" cy="7.5" r="3" />
      <path d="M12 4.8v5.4M9.3 7.5h5.4" />
      <path d="M12 10.5V21" />
      <path d="M9.2 14.5h5.6M8.6 18h6.8" />
    </>
  ),
  snow: (
    <>
      <path d="M12 3v18" />
      <path d="M4.8 7.2 19.2 16.8" />
      <path d="M19.2 7.2 4.8 16.8" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  phone: (
    <path d="M8.5 4.5h2.2l1.2 3-1.6 1a12 12 0 0 0 5.2 5.2l1-1.6 3 1.2v2.2a1.5 1.5 0 0 1-1.6 1.5A14.5 14.5 0 0 1 7 6.1a1.5 1.5 0 0 1 1.5-1.6z" />
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  star: <path d="m12 3.4 2.1 4.6 5 .6-3.7 3.4.9 4.9L12 14.8 7.7 17l.9-4.9L4.9 8.6l5-.6L12 3.4z" />,
};
