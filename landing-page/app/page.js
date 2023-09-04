import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="home-content"></div>
      <Link href="/aboutus">aboutus로 가기</Link>
      <Link href="/promotion">promotion로 가기</Link>
    </div>
  );
}
