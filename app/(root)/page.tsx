import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

export default function Home() {
    const loggedIn = {
        firstName: "Angel",
        lastName: "Saikia",
        email: "developer@angelsaikia.com",
    };
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || "Guest"}
                        subtext="Access and manage your account amd transactions eficiently."
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1759.82}
                    />
                </header>
                Recent Transactions
            </div>

            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[
                    { currentBalance: "123.45" },
                    { currentBalance: "678.90" },
                ]}
            />
        </section>
    );
}
