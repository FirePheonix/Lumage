export const Button = (props: React.PropsWithChildren) => {
    return (
        <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] group">
              <div className="absolute inset-0">
                <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="rounded-lg absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] group-hover:shadow-[0_0_15px_rgb(140,69,255,.9)_inset] transition-all duration-300"></div>
              </div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">{props.children}</span>
        </button>
    );
};
