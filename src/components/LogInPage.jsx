import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LoginPage = ({ email, setEmail, password, setPassword, loginError, handleLogin }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212] p-4">
        <Card className="w-full max-w-md bg-[#1e1e1e] border-0 shadow-lg backdrop-blur-lg bg-opacity-80">
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-4">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20minimalist%20agriculture%20and%20fisheries%20logo%20design%20with%20a%20stylized%20leaf%20and%20fish%20icon%20in%20gradient%20green%20and%20blue%20colors%20on%20a%20dark%20background%2C%20professional%20and%20clean%20design%2C%20suitable%20for%20government%20agency&width=120&height=120&seq=1&orientation=squarish" 
                alt="AgriTech Logo" 
                className="h-20 w-20"
              />
            </div>
            <CardTitle className="text-2xl font-bold text-center text-white">AgriTech Registry</CardTitle>
            <CardDescription className="text-center text-gray-400">Enter your credentials to access the dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                {loginError && (
                  <div className="bg-red-900/50 border border-red-800 text-red-100 px-4 py-2 rounded-md text-sm">
                    {loginError}
                  </div>
                )}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@agritech.gov"
                    className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-gray-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium text-gray-300">Password</label>
                    <a href="#" className="text-xs text-blue-400 hover:text-blue-300">Forgot password?</a>
                  </div>
                  <Input 
                    id="password" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-gray-500"
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full mt-6 bg-purple-900/30 hover:from-green-700 hover:to-blue-700 text-white !rounded-button whitespace-nowrap">
                Sign In
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-xs text-gray-400">© 2025 AgriTech Registry System</p>
          </CardFooter>
        </Card>
      </div>
  );
};

export default LoginPage;
