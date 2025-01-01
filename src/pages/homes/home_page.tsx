import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Activity, Users, DollarSign, ShoppingCart } from "lucide-react";

function HomePage() {
  const chartData = [
    { month: "Jan", sales: 4000, users: 2400 },
    { month: "Feb", sales: 3000, users: 1398 },
    { month: "Mar", sales: 2000, users: 9800 },
    { month: "Apr", sales: 2780, users: 3908 },
    { month: "May", sales: 1890, users: 4800 },
    { month: "Jun", sales: 2390, users: 3800 },
  ];

  const recentOrders = [
    {
      id: 1,
      customer: "John Doe",
      product: "Premium Plan",
      status: "Completed",
      amount: "$99.00",
    },
    {
      id: 2,
      customer: "Jane Smith",
      product: "Basic Plan",
      status: "Pending",
      amount: "$49.00",
    },
    {
      id: 3,
      customer: "Bob Johnson",
      product: "Pro Plan",
      status: "Processing",
      amount: "$79.00",
    },
    {
      id: 4,
      customer: "Alice Brown",
      product: "Premium Plan",
      status: "Completed",
      amount: "$99.00",
    },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Welcome back, Admin!</p>
      </div>

      {/* STats card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="flex flex-row items-center justify-between">
            <h1 className="text-2xl font-bold">$5,000</h1>
            <p className="text-green-500">+10%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Users</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="flex flex-row items-center justify-between">
            <div className="text-2xl font-bold">+2,350</div>
            <p className="text-xs text-gray-500">+10.1% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <Activity className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="flex flex-row items-center justify-between">
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-gray-500">+201 since last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent className="flex flex-row items-center justify-between">
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-gray-500">+19% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <LineChart data={chartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                <Line type="monotone" dataKey="users" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Recent Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell className="text-right">{order.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default HomePage;
