import { Router, Request, Response } from 'express';
import Jt400 from '../jt400/jt400';
import { Prueba } from '../util/prueba.insterface';
const router = Router();



router.get( '/prueba', 
            (req: Request, res: Response) => 
            {                
                let results: Prueba = {};
                const query = `SELECT * FROM arai.prueba`;
                results = Jt400.ejecutarQuery(query);
                console.log('results.ok :', results.ok);
                if(!results.ok ){
                    res.status(400).json({
                        ok:false,
                        error: results
                    });
                }
                else{
                    res.json({
                        ok:true,
                        prueba: results
                    });
                }   
            }                  
                
);
export default router;