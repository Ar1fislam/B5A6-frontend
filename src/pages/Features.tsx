// src/components/FeaturesPage.tsx
// import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Banknote,
  BarChart3,
  Bell,
  CreditCard,
  History,
  QrCode,
  Receipt,
  Send,
  Settings,
  Shield,
  Smartphone,
  User,
  UserCheck,
  Users,
  Wallet,
} from "lucide-react";

export default function FeaturesPage() {
const userFeatures = [
  {
    icon: <User className="h-8 w-8 text-[var(--primary)]" />,
    title: "Sign Up Instantly",
    description:
      "Open your Wallet Nest account in just a few steps—no complicated paperwork required.",
  },
  {
    icon: <Wallet className="h-8 w-8 text-[var(--primary)]" />,
    title: "Wallet Management",
    description:
      "Safely store and oversee your cash, all in one trusted digital wallet.",
  },
  {
    icon: <ArrowDownCircle className="h-8 w-8 text-[var(--primary)]" />,
    title: "Deposit Funds",
    description:
      "Top up your wallet quickly through any verified Wallet Nest agent in your area.",
  },
  {
    icon: <Send className="h-8 w-8 text-[var(--primary)]" />,
    title: "Transfer Instantly",
    description:
      "Send payments to contacts or businesses with ease, whenever you need.",
  },
  {
    icon: <ArrowUpCircle className="h-8 w-8 text-[var(--primary)]" />,
    title: "Cash Withdrawal",
    description:
      "Collect cash from your Wallet Nest balance at any authorized outlet.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-[var(--primary)]" />,
    title: "Balance Snapshot",
    description:
      "Always know where you stand with a clear, real-time wallet balance overview.",
  },
  {
    icon: <History className="h-8 w-8 text-[var(--primary)]" />,
    title: "Activity Log",
    description:
      "See past transactions at a glance with complete details and smart search.",
  },
  {
    icon: <Settings className="h-8 w-8 text-[var(--primary)]" />,
    title: "Profile Customization",
    description:
      "Adjust account preferences, update personal details, and fine-tune security settings.",
  },
];

 const agentFeatures = [
  {
    icon: <UserCheck className="h-8 w-8 text-[var(--primary)]" />,
    title: "Agent Onboarding",
    description:
      "Become a recognized Wallet Nest agent to offer nearby customers modern financial services.",
  },
  {
    icon: <ArrowDownCircle className="h-8 w-8 text-[var(--primary)]" />,
    title: "Deposit Assistance",
    description:
      "Assist users in funding their digital wallets simply and reliably.",
  },
  {
    icon: <ArrowUpCircle className="h-8 w-8 text-[var(--primary)]" />,
    title: "Withdrawal Tools",
    description:
      "Help people withdraw funds from their Wallet Nest accounts quickly and securely.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-[var(--primary)]" />,
    title: "Performance Hub",
    description:
      "Track transactions, monitor commissions, and analyze your activity in one portal.",
  },
  {
    icon: <History className="h-8 w-8 text-[var(--primary)]" />,
    title: "Comprehensive Logs",
    description:
      "Keep organized records of all your agent transactions and operations.",
  },
  {
    icon: <Settings className="h-8 w-8 text-[var(--primary)]" />,
    title: "Agent Controls",
    description:
      "Manage your service hours, profile visibility, and commission preferences.",
  },
];


 const commonFeatures = [
  {
    icon: <Smartphone className="h-8 w-8 text-[var(--primary)]" />,
    title: "Universal App",
    description:
      "Enjoy seamless access to your Wallet Nest account from both iOS and Android devices.",
  },
  {
    icon: <Shield className="h-8 w-8 text-[var(--primary)]" />,
    title: "Advanced Protection",
    description:
      "Benefit from high-level encryption, biometrics, and real-time fraud alerts.",
  },
  {
    icon: <Bell className="h-8 w-8 text-[var(--primary)]" />,
    title: "Instant Alerts",
    description:
      "Receive prompt notifications for every payment, update, and offer.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-[var(--primary)]" />,
    title: "Flexible Payments",
    description:
      "Choose from cards, bank transfer, or mobile money to handle all your finances.",
  },
  {
    icon: <Banknote className="h-8 w-8 text-[var(--primary)]" />,
    title: "Transparent Costs",
    description:
      "Low fees clearly displayed—no surprises, no hidden charges, ever.",
  },
  {
    icon: <Users className="h-8 w-8 text-[var(--primary)]" />,
    title: "Network Growth",
    description:
      "Be part of a fast-growing Wallet Nest community bridging cities and villages.",
  },
  {
    icon: <QrCode className="h-8 w-8 text-[var(--primary)]" />,
    title: "QR Transfers",
    description:
      "Make contactless transactions anywhere with Wallet Nest’s quick-scan QR codes.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-[var(--primary)]" />,
    title: "Transaction Proofs",
    description:
      "Automatically receive electronic receipts for every transaction, big or small.",
  },
];


  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      {/* Features Tabs */}
      <section className="py-16 px-6 bg-[var(--card)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="user" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-[var(--muted)]">
              <TabsTrigger
                value="user"
                className="data-[state=active]:bg-[var(--primary)] data-[state=active]:text-[var(--primary-foreground)]"
              >
                User Features
              </TabsTrigger>
              <TabsTrigger
                value="agent"
                className="data-[state=active]:bg-[var(--primary)] data-[state=active]:text-[var(--primary-foreground)]"
              >
                Agent Features
              </TabsTrigger>
              <TabsTrigger
                value="common"
                className="data-[state=active]:bg-[var(--primary)] data-[state=active]:text-[var(--primary-foreground)]"
              >
                Common Features
              </TabsTrigger>
            </TabsList>

            <TabsContent value="user" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300">
                  Features for Users
                </h2>
              
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {userFeatures.map((feature, index) => (
                  <Card
                    key={index}
                    className="border-[var(--border)] shadow-md hover:shadow-lg transition-all duration-300 bg-[var(--card)] hover:-translate-y-1"
                  >
                    <CardHeader className="text-center">
                      <div className="mb-4">{feature.icon}</div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-[var(--muted-foreground)] text-center">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="agent" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300">
                  Features for Agents
                </h2>
               
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {agentFeatures.map((feature, index) => (
                  <Card
                    key={index}
                    className="border-[var(--border)] shadow-md hover:shadow-lg transition-all duration-300 bg-[var(--card)] hover:-translate-y-1"
                  >
                    <CardHeader className="text-center">
                      <div className="mb-4">{feature.icon}</div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-[var(--muted-foreground)] text-center">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="common" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300">
                  Features for Everyone
                </h2>
           
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {commonFeatures.map((feature, index) => (
                  <Card
                    key={index}
                    className="border-[var(--border)] shadow-md hover:shadow-lg transition-all duration-300 bg-[var(--card)] hover:-translate-y-1"
                  >
                    <CardHeader className="text-center">
                      <div className="mb-4">{feature.icon}</div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-[var(--muted-foreground)] text-center">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>


    </div>
  );
}
