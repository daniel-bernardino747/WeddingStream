import { ButtonSubmit, Video } from "@/components";
import { LINK_INVITE_FATHER } from "@/constants";

export default function RootPage() {
  return (
    <>
      <h1 className="animate-pulse">Assista ao vídeo</h1>
      <main>
        <Video src={LINK_INVITE_FATHER} />
      </main>

      <ButtonSubmit path="/convite" placeholder="Ver convite oficial" />
    </>
  );
}
