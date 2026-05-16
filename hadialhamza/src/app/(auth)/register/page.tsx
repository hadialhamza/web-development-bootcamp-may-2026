"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Mail, ArrowRight, User } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import InputGroup from "@/components/ui/InputGroup";
import AuthSidebar from "@/components/auth/AuthSidebar";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex bg-background overflow-hidden">
      <AuthSidebar 
        title={<>Build your financial <span className="text-primary">freedom</span> today.</>}
        subtitle="Create your account in seconds and start taking control of your financial future with our powerful tracking tools."
      />

      {/* Right Side: Register Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-24 xl:px-32 relative overflow-y-auto scrollbar-hide">
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

        <div className="max-w-md w-full mx-auto space-y-10 py-12 lg:py-0">
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-black text-foreground tracking-tight"
            >
              Create account
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground font-medium"
            >
              Join SpendSentry and start tracking like a pro.
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
                  label="Full Name"
                  type="text"
                  placeholder="John Doe"
                  icon={<User className="w-4 h-4" />}
                  required
                />
                <InputGroup
                  label="Email address"
                  type="email"
                  placeholder="name@example.com"
                  icon={<Mail className="w-4 h-4" />}
                  required
                />
                <InputGroup
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  required
                  helperText="Must be at least 8 characters."
                />
                <InputGroup
                  label="Confirm Password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mt-1 accent-primary h-4 w-4 rounded-lg border-border" 
                  required 
                />
                <label htmlFor="terms" className="text-xs text-muted-foreground font-medium leading-relaxed">
                  I agree to the <Link href="#" className="text-primary font-bold hover:underline">Terms of Service</Link> and <Link href="#" className="text-primary font-bold hover:underline">Privacy Policy</Link>.
                </label>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full h-14 text-base shadow-xl shadow-primary/20"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Create Account
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-[0.2em]">
                <span className="bg-background px-4 text-muted-foreground font-black">
                  Or sign up with
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
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-black hover:underline uppercase tracking-widest ml-1"
            >
              Sign in here
            </Link>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
