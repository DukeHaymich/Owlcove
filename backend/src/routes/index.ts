import categoryRoutes from "./categoryRoutes";
import foodRoutes from "./foodRoutes";
import menusRoutes from "./menusRoutes";
import reservationRoutes from "./reservationRoutes";

export default function routes(app: any) {
  app.use("/food", foodRoutes);
  app.use("/category", categoryRoutes);
  app.use("/menus", menusRoutes);
  app.use("/reservation", reservationRoutes);
}
