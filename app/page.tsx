import { ButtonSubmit, Video } from "@/components";
import { LINK_INVITE_CHILDREN } from "@/constants";

export default function RootPage() {
  return (
    <>
      <h1 className="animate-pulse">Assista ao vídeo</h1>
      <main>
        <Video src={LINK_INVITE_CHILDREN} />
      </main>

      <ButtonSubmit
        path="/confirmar-presenca"
        placeholder="Ver convite oficial"
      />
    </>
  );
}
