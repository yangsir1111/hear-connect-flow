import { Heart, Target, Users, Mail, MessageCircle, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "包容",
      description: "关注每一个需要帮助的人，让科技服务每一个个体"
    },
    {
      icon: Target,
      title: "创新",
      description: "持续探索前沿技术，为用户提供更好的产品体验"
    },
    {
      icon: Users,
      title: "温暖",
      description: "用心倾听用户需求，用温度传递科技的力量"
    }
  ];

  const team = [
    {
      role: "产品团队",
      description: "经验丰富的产品经理和设计师，专注于无障碍产品设计"
    },
    {
      role: "技术团队",
      description: "来自知名互联网公司的工程师，在语音识别领域深耕多年"
    },
    {
      role: "顾问团队",
      description: "听力专家、语言治疗师等专业人士提供指导和建议"
    }
  ];

  const awards = [
    "2024年度最佳无障碍应用",
    "中国互联网公益奖",
    "微信小程序优秀案例"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="gradient-soft py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                关于听呗
              </h1>
              <p className="text-xl text-muted-foreground">
                用科技的力量，让沟通没有障碍
              </p>
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-none shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle className="text-3xl text-center mb-4">我们的故事</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    听呗诞生于2023年，源于我们团队对无障碍沟通的深切关注。在中国，有超过2000万听障人士，
                    他们在日常沟通中面临着各种困难和挑战。我们相信，每个人都有平等沟通的权利，
                    科技应该让世界变得更加包容。
                  </p>
                  <p>
                    通过深入了解听障人士的实际需求，结合先进的语音识别技术，我们开发了听呗这款产品。
                    它不仅仅是一个工具，更是一座桥梁，连接着有声世界和无声世界，让沟通变得简单、自然。
                  </p>
                  <p>
                    我们的使命是：<span className="text-secondary font-semibold">让每个人都能无障碍沟通</span>。
                    我们希望通过持续的技术创新和产品优化，帮助更多人打破沟通障碍，重建情感连接，
                    享受平等、自由的交流体验。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">我们的价值观</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover-lift">
                  <CardHeader>
                    <div className="mx-auto p-4 rounded-full bg-secondary/10 w-fit mb-4">
                      <value.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">我们的团队</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {team.map((member, index) => (
                  <Card key={index} className="hover-lift">
                    <CardHeader>
                      <CardTitle className="text-xl text-secondary">{member.role}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{member.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-secondary/10">
                  <Award className="h-12 w-12 text-secondary" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-8">荣誉与认证</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-card rounded-full shadow-[var(--shadow-soft)] text-sm font-medium"
                  >
                    {award}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">联系我们</h2>
              <Card className="border-none shadow-[var(--shadow-card)]">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                          <Mail className="h-5 w-5 text-secondary" />
                          邮箱联系
                        </h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p>客服支持：<a href="mailto:support@tingbei.com" className="text-secondary hover:underline">support@tingbei.com</a></p>
                          <p>商务合作：<a href="mailto:partner@tingbei.com" className="text-secondary hover:underline">partner@tingbei.com</a></p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                          <MessageCircle className="h-5 w-5 text-secondary" />
                          社交媒体
                        </h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p>微信公众号：听呗-AI实时语音翻译助手</p>
                          <p>微博：@听呗官方</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-4">公司信息</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p className="font-medium text-foreground">微客行文化传播(武汉)有限公司</p>
                        <p>地址：湖北省武汉市</p>
                        <p>工作时间：周一至周五 9:00-18:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
