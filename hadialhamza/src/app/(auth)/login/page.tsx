"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Mail, ArrowRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import InputGroup from "@/components/ui/InputGroup";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex bg-background overflow-hidden">
      {/* Left Side: Visual/Branding (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-slate-950 overflow-hidden items-center justify-center p-12">
        {/* Background Patterns & Glows */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-lg text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Logo
              inverted
              hideTagline
              className="mb-12 scale-150 origin-center justify-center"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-white mb-6 tracking-tight"
          >
            Track your expenses with{" "}
            <span className="text-primary">precision.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-400 font-medium leading-relaxed"
          >
            Join thousands of users who have transformed their financial life
            with SpendSentry&apos;s intelligent tracking and analytics.
          </motion.p>
        </div>

        {/* Decorative Corner Text */}
        <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
          <span>SpendSentry © 2026</span>
          <Link href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-24 xl:px-32 relative">
        {/* Mobile Logo */}
        <div className="lg:hidden absolute top-8 left-8">
          <Logo hideTagline className="scale-90 origin-left" />
        </div>

        {/* Back Link */}
        <Link
          href="/"
          className="absolute top-8 right-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="max-w-md w-full mx-auto space-y-10">
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-black text-foreground tracking-tight"
            >
              Welcome back
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground font-medium"
            >
              Please enter your details to sign in to your account.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <InputGroup
                  label="Email address"
                  type="email"
                  placeholder="name@example.com"
                  icon={<Mail className="w-4 h-4" />}
                  required
                />
                <div className="space-y-2">
                  <InputGroup
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                  <div className="flex justify-end">
                    <Link
                      href="#"
                      className="text-xs font-black text-primary hover:underline uppercase tracking-widest"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full h-14 text-base shadow-xl shadow-primary/20"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Sign In
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-[0.2em]">
                <span className="bg-background px-4 text-muted-foreground font-black">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="ghost"
                className="h-14 border-2 border-border hover:bg-muted/50 text-foreground font-black uppercase tracking-widest text-xs group"
                icon={
                  <Image
                    src="/icons/github.svg"
                    alt="GitHub"
                    width={20}
                    height={20}
                    className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                  />
                }
              >
                GitHub
              </Button>
              <Button
                variant="ghost"
                className="h-14 border-2 border-border hover:bg-muted/50 text-foreground font-black uppercase tracking-widest text-xs group"
                icon={
                  <Image
                    src="/icons/gmail.svg"
                    alt="Google"
                    width={20}
                    height={20}
                    className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                  />
                }
              >
                Google
              </Button>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-sm text-muted-foreground font-medium"
          >
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-primary font-black hover:underline uppercase tracking-widest ml-1"
            >
              Sign up for free
            </Link>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
