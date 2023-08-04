import { getProviders, signIn } from "next-auth/react";
import styles from "style/styles.module.css";
import Image from "next/image";

/** types */
import { InferGetServerSidePropsType } from "next";

const login = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={styles.BackgroundPaper}>
      <div className={styles.contentCenter}>
        <div className={styles.mainContent}>
          {/* <Image
            src="/github-mark.svg"
            width={150}
            height={150}
            objectFit="contain"
            alt={"Github Logo"}
          /> */}
          {providers &&
            Object.values(providers).map((provider) => {
              return (
                <div key={provider.name}>
                  <button
                    className={styles.githubButton}
                    onClick={() =>
                      signIn(provider.id, {
                        callbackUrl: "/top/main",
                      })
                    }
                  >
                    <span className="">Sign in with {provider.name}</span>
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default login;

/**
 * プロバイダーリストを取得
 */
export const getServerSideProps = async () => {
  const providers = await getProviders().then((res) => {
    console.log(res, "<<<<< : provider response");
    return res;
  });

  return {
    props: { providers },
  };
};