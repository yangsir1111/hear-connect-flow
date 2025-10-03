import { ArrowRight, Mic, Type, Globe, Save, Heart, Briefcase, Users, Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImg from "@/assets/hero-bg.jpg";
import qrCode from "@/assets/qr-code.jpg";
import familyImg from "@/assets/scene-family.jpg";
import medicalImg from "@/assets/scene-medical.jpg";
import socialImg from "@/assets/scene-social.jpg";
import workImg from "@/assets/scene-work.jpg";

const Index = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "打破沟通障碍",
      description: "实时语音转文字，让每一句话都清晰可见，重建情感连接"
    },
    {
      icon: Users,
      title: "简单易用",
      description: "一键启动，无需学习，老人小孩都能轻松使用"
    },
    {
      icon: Save,
      title: "隐私安全",
      description: "数据加密保护，可选本地存储，您的隐私完全掌控"
    }
  ];

  const features = [
    {
      icon: Mic,
      title: "实时语音转文字",
      description: "基于AI技术，<200ms延迟，98%准确率，让沟通即时流畅"
    },
    {
      icon: Type,
      title: "超大字体显示",
      description: "三档字体大小调节，高对比度模式，确保清晰易读"
    },
    {
      icon: Globe,
      title: "多语言方言支持",
      description: "支持中英日韩等语言，识别16种中国方言"
    },
    {
      icon: Save,
      title: "历史记录保存",
      description: "自动保存对话内容，随时回顾重要信息"
    }
  ];

  const scenarios = [
    {
      icon: Home,
      title: "家庭沟通",
      description: "让家人间的交流更加温暖顺畅",
      image: familyImg,
      link: "/scenarios#family"
    },
    {
      icon: Heart,
      title: "医疗问诊",
      description: "准确理解医嘱，守护健康安全",
      image: medicalImg,
      link: "/scenarios#medical"
    },
    {
      icon: Users,
      title: "社交聚会",
      description: "重拾社交信心，享受快乐时光",
      image: socialImg,
      link: "/scenarios#social"
    },
    {
      icon: Briefcase,
      title: "工作环境",
      description: "提高效率，避免沟通失误",
      image: workImg,
      link: "/scenarios#work"
    }
  ];

  const testimonials = [
    {
      name: "张爷爷",
      age: "75岁",
      role: "退休教师",
      content: "自从有了听呗，我和孙子的交流变得轻松多了。每天都能清楚地'听到'他在说什么，感觉我们的距离更近了。",
      avatar: "👴"
    },
    {
      name: "李医生",
      age: "45岁",
      role: "主治医师",
      content: "听呗让我的诊疗工作更加顺畅。患者能够准确理解我的医嘱，大大降低了医疗风险。我会主动推荐给有需要的患者。",
      avatar: "👨‍⚕️"
    },
    {
      name: "王女士",
      age: "38岁",
      role: "企业职员",
      content: "听呗让我重新拥有了社交生活。现在参加朋友聚会不再尴尬，我能够自信地参与每一次对话。",
      avatar: "👩"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${heroImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.15
            }}
          />
          <div className="absolute inset-0 gradient-hero opacity-90 z-0" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left text-primary-foreground">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
                  听呗，让沟通零距离
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
                  专为听障人士及沟通不便者设计的<br />实时语音转文字工具
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" variant="hero" className="text-lg">
                    立即体验 <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg bg-white/10 text-white border-white/20 hover:bg-white/20">
                    了解更多
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <Card className="bg-card/95 backdrop-blur-sm shadow-[var(--shadow-card)] max-w-sm">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">扫码体验听呗</CardTitle>
                    <CardDescription>打开微信扫一扫</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <img 
                      src={qrCode} 
                      alt="听呗小程序二维码" 
                      className="w-48 h-48 rounded-lg shadow-md mb-4"
                    />
                    <p className="text-sm text-muted-foreground text-center">
                      免费使用，无需注册<br />即刻体验无障碍沟通
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">为什么选择听呗？</h2>
              <p className="text-xl text-muted-foreground">我们致力于打造最好用的无障碍沟通工具</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {coreValues.map((value, index) => (
                <Card key={index} className="text-center hover-lift border-none shadow-[var(--shadow-card)]">
                  <CardHeader>
                    <div className="mx-auto p-4 rounded-full bg-secondary/10 w-fit mb-4">
                      <value.icon className="h-10 w-10 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 gradient-soft">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">产品特点</h2>
              <p className="text-xl text-muted-foreground">强大的功能，简单的操作</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <div className="p-3 rounded-lg bg-secondary/10 w-fit mb-3">
                      <feature.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="secondary" size="lg">
                <Link to="/features">
                  查看所有功能 <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Scenarios */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">使用场景</h2>
              <p className="text-xl text-muted-foreground">无论何时何地，听呗都能帮您打破沟通障碍</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scenarios.map((scenario, index) => (
                <Link key={index} to={scenario.link}>
                  <Card className="overflow-hidden hover-lift cursor-pointer h-full">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={scenario.image} 
                        alt={scenario.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <scenario.icon className="h-5 w-5 text-secondary" />
                        <CardTitle className="text-lg">{scenario.title}</CardTitle>
                      </div>
                      <CardDescription>{scenario.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="secondary" size="lg">
                <Link to="/scenarios">
                  探索更多场景 <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 gradient-soft">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">用户评价</h2>
              <p className="text-xl text-muted-foreground">听听他们怎么说</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{testimonial.avatar}</div>
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.age} · {testimonial.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">立即体验听呗</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              扫描二维码，开启无障碍沟通新体验
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg">
                立即使用 <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 text-white border-white/20 hover:bg-white/20">
                分享给需要的人
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
