import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/tingbei-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="听呗" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 text-sm mb-4">
              让沟通零距离，专为听障人士及沟通不便者设计的实时语音转文字工具
            </p>
            <p className="text-primary-foreground/60 text-xs">
              微客行文化传播(武汉)有限公司
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  功能特点
                </Link>
              </li>
              <li>
                <Link to="/scenarios" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  使用场景
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  关于我们
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">联系我们</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a
                  href="mailto:support@tingbei.com"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  support@tingbei.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">微信公众号：听呗助手</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
            <p>© 2025 听呗. 保留所有权利.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">
                隐私政策
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                用户协议
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
